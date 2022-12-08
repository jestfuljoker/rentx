import { inject, injectable } from 'tsyringe';

import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

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

    await this.specificationRepository.mutate({ name, description });
  }
}
