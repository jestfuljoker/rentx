import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

export class SpecificationInMemory implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  async mutate({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);
  }

  async findByName(name: string): Promise<Specification | undefined> {
    return this.specifications.find(
      specification => specification.name === name,
    );
  }

  async list(): Promise<Specification[]> {
    return this.specifications;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    return this.specifications.filter(specification =>
      ids.includes(specification.id as string),
    );
  }
}
