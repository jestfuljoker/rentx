import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';

import { ensureAuthenticated } from '../middlewares';
import { ensureIsAdmin } from '../middlewares/ensureIsAdmin';

const carsRouter = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRouter.post(
  '/',
  ensureAuthenticated,
  ensureIsAdmin,
  createCarController.handle,
);

carsRouter.get('/available', listAvailableCarsController.handle);

export { carsRouter };
