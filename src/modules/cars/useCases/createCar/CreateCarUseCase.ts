import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
  dailyRate: number;
  licensePlate: string;
  fineAmount: number;
  brand: string;
  categoryId: string;
}

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) {}

  async execute(data: IRequest): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      data.licensePlate,
    );

    if (carAlreadyExists) {
      throw new AppError(
        `Car with license plate ${data.licensePlate} already exists`,
      );
    }

    const car = await this.carsRepository.mutate(data);

    return car;
  }
}
