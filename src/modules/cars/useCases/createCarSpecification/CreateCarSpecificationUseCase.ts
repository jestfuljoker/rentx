import { inject } from 'tsyringe';

import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  carId: string;
  specificationsId: string[];
}

export class CreateCarSpecificationUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ carId, specificationsId }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(carId);

    if (!carExists) {
      throw new AppError('Car does not exist!');
    }

    carExists.specifications;
  }
}
