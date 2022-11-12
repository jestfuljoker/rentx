import { Specification } from '@modules/cars/entities/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
  list(): Promise<Specification[]>;
}
