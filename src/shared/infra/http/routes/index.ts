import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares';
import { authRoutes } from './auth.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', ensureAuthenticated, usersRouter);
router.use(authRoutes);

export { router };
