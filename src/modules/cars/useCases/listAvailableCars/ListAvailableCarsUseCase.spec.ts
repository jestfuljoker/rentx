import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 1',
      description: 'Test',
      dailyRate: 100.0,
      licensePlate: '132-ABC',
      fineAmount: 100.0,
      brand: 'Brand',
      categoryId: 'ad021a7d-3fc0-4d36-bb43-415e4dd1351e',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 2',
      description: 'Test',
      dailyRate: 100.0,
      licensePlate: '132-ABC',
      fineAmount: 100.0,
      brand: 'Brand 2',
      categoryId: 'ad021a7d-3fc0-4d36-bb43-415e4dd1351e',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Brand 2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 3',
      description: 'Test',
      dailyRate: 100.0,
      licensePlate: '132-ABC',
      fineAmount: 100.0,
      brand: 'Brand 3',
      categoryId: 'ad021a7d-3fc0-4d36-bb43-415e4dd1351e',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car 3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car 4',
      description: 'Test',
      dailyRate: 100.0,
      licensePlate: '132-ABC',
      fineAmount: 100.0,
      brand: 'Brand 4',
      categoryId: 'ad021a7d-3fc0-4d36-bb43-415e4dd1351e',
    });

    const cars = await listAvailableCarsUseCase.execute({
      categoryId: 'ad021a7d-3fc0-4d36-bb43-415e4dd1351e',
    });

    expect(cars).toEqual([car]);
  });
});
