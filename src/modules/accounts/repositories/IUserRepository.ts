import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

export interface IUsersRepository {
  /**
   * Saves a given entity in the database. If entity does not exist in the database then inserts, otherwise updates.
   */
  mutate(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(id: string): Promise<User | undefined>;
}
