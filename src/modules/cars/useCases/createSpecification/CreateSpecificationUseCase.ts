import { inject, injectable } from 'tsyringe';

import { AppError } from '@errors/AppError';
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: SpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new AppError(`Specification ${name} already exists!`);
    }

    await this.specificationRepository.create({ name, description });
  }
}
