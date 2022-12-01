import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationInMemory implements ISpecificationsRepository {
  private specifications:

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findByName(name: string): Promise<Specification | undefined> {
    throw new Error('Method not implemented.');
  }
  async list(): Promise<Specification[]> {
    throw new Error('Method not implemented.');
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    throw new Error('Method not implemented.');
  }


}
