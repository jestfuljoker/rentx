import { Category } from '../infra/typeorm/entities/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  /**
   * Saves a given entity in the database. If entity does not exist in the database then inserts, otherwise updates.
   */
  mutate({ name, description }: ICreateCategoryDTO): Promise<void>;
}
