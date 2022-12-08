import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  carId: string;
  specificationsId: string[];
}

export class CreateCarSpecificationUseCase {
  constructor(
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ carId, specificationsId }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(carId);

    if (!carExists) {
      throw new AppError('Car does not exist!');
    }

    const specifications = await this.specificationsRepository.findByIds(
      specificationsId,
    );

    carExists.specifications = specifications;

    await this.carsRepository.mutate(carExists);
  }
}
