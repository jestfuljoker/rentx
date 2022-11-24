import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

interface IRequest {
  categoryId?: string;
  brand?: string;
  name?: string;
}

@injectable()
export class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
  ) {}

  async execute({ brand, categoryId, name }: IRequest): Promise<Car[]> {
    const cars = this.carsRepository.findAvailable(brand, categoryId, name);

    return cars;
  }
}
