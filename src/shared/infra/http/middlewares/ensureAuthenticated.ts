import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('User not authorized. Missing token', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(token, process.env.JWT_SECRET as string);

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(userId as string);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      id: userId as string,
    };

    next();
  } catch (error) {
    throw new AppError('User not authorized. Invalid token', 401);
  }
}
