import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create car specification', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should not be able to add a new specification to a car which does not exists', async () =>
    expect(async () => {
      const carId = '123';
      const specificationsId = ['123', '456'];

      await createCarSpecificationUseCase.execute({
        carId,
        specificationsId,
      });
    }).rejects.toBeInstanceOf(AppError));

  it('should be able to add a new specification to the car', async () => {
    const specificationsId = ['123', '456'];

    const car = await carsRepositoryInMemory.create({
      name: 'Car name',
      description: 'Car description',
      dailyRate: 100,
      licensePlate: 'ABC-123',
      fineAmount: 60,
      brand: 'Car brand',
      categoryId: 'category',
    });

    await createCarSpecificationUseCase.execute({
      carId: car.id as string,
      specificationsId,
    });
  });
});
