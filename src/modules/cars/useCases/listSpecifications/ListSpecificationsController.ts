import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

export class ListSpecificationsController {
  handle(request: Request, response: Response): Response {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase,
    );

    const specifications = listSpecificationsUseCase.execute();

    return response.status(201).json(specifications);
  }
}
