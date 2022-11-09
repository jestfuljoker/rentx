import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticaUseController';

const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authRoutes.post('/sessions', authenticateUserController.handle);

export { authRoutes };
