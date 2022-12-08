import { getRepository, Repository } from 'typeorm';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

import { Car } from '../entities/Car';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async mutate(data: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(data);

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car | undefined> {
    const car = await this.repository.findOne({ licensePlate });

    return car;
  }

  async findAvailable(
    brand?: string,
    categoryId?: string,
    name?: string,
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder()
      .where('available = :available', { available: true });

    if (brand) {
      carsQuery.andWhere('brand = :brand', { brand });
    }

    if (categoryId) {
      carsQuery.andWhere('"categoryId" = :categoryId', { categoryId });
    }

    if (name) {
      carsQuery.andWhere('name = :name', { name });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }

  async findById(id: string): Promise<Car | undefined> {
    const car = await this.repository.findOne(id);

    return car;
  }
}
