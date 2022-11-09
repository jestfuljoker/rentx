import { NextFunction, Request, Response } from 'express';

import { AppError } from '../errors/AppError';

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  console.log('#ERROR: ', error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
