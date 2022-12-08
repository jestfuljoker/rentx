import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarsRepository {
  /**
   * Saves a given entity in the database. If entity does not exist in the database then inserts, otherwise updates.
   */
  mutate(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(licensePlate: string): Promise<Car | undefined>;
  findAvailable(
    brand?: string,
    categoryId?: string,
    name?: string,
  ): Promise<Car[]>;
  findById(id: string): Promise<Car | undefined>;
}
