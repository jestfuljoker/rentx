import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '@errors/AppError';

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export class ImportCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    if (!file) {
      throw new AppError('File not provided or invalid');
    }

    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase);

    await importCategoriesUseCase.execute(file);

    return response.status(201).send();
  }
}
