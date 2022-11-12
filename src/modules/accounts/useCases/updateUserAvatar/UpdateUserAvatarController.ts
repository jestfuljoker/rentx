import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AppError } from '@errors/AppError';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

export class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: userId } = request.user;

    const avatarFile = request.file?.filename;

    if (!avatarFile) {
      throw new AppError('Error while updating avatar. Missing file');
    }

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({ userId, avatarFile });

    return response.status(204).send();
  }
}
