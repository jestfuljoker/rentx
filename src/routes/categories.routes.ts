import { Router } from 'express';
import multer from 'multer';
import path from 'path';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({
  dest: path.resolve(__dirname, '../', '../', 'tmp'),
});

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { categoriesRoutes };
