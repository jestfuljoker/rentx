import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUserRepository';

import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async mutate(userData: ICreateUserDTO): Promise<void> {
    const user = this.repository.create(userData);

    await this.repository.save(user);
  }
}
