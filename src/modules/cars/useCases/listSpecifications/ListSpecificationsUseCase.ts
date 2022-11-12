import { inject, injectable } from 'tsyringe';

import { Specification } from '@modules/cars/entities/Specification';
import { SpecificationsRepository } from '@modules/cars/repositories/implementations/SpecificationsRepository';

@injectable()
export class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: SpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}
