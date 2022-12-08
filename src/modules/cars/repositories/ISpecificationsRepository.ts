import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  /**
   * Saves a given entity in the database. If entity does not exist in the database then inserts, otherwise updates.
   */
  mutate({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
  list(): Promise<Specification[]>;
  findByIds(ids: string[]): Promise<Specification[]>;
}
