import { AppError } from '@errors/AppError';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/inMemory/UsersRepositoryInMemory';

import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driverLicense: '001123',
      email: 'jondoe@mail.com',
      name: 'Jon Doe',
      password: '123456',
    };

    await createUserUseCase.execute(user);

    const authPayload = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(authPayload).toHaveProperty('token');
  });

  it('should not be able to authenticate an non existent user', () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: 'false@mail.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driverLicense: '001124',
        email: 'jondoe2@mail.com',
        name: 'Jon Doe 2',
        password: '654321',
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: '123456',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
