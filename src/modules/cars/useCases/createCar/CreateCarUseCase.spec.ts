import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car name',
      description: 'Car description',
      dailyRate: 100,
      licensePlate: 'ABC-123',
      fineAmount: 60,
      brand: 'Car brand',
      categoryId: 'category',
    });

    expect(car).toHaveProperty('id');
  });

  it('should not be able to create a new car with a license plate that already exists', () => {
    expect(async () => {
      const car = {
        name: 'Car name 2',
        description: 'Car description 2',
        dailyRate: 200,
        licensePlate: 'ABC-123',
        fineAmount: 1200,
        brand: 'Car brand 2',
        categoryId: 'category',
      };

      await createCarUseCase.execute(car);

      await createCarUseCase.execute(car);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Car name 3',
      description: 'Car description 3',
      dailyRate: 300,
      licensePlate: '123-ABC',
      fineAmount: 1111,
      brand: 'Car brand 3',
      categoryId: 'category',
    });

    expect(car.available).toBe(true);
  });
});
