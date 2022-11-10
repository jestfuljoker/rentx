import 'reflect-metadata';
import 'dotenv/config';
import './database';
import './shared/container';

import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { errorHandler } from './middlewares';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(errorHandler);

app.listen(3333, () =>
  console.log("✨ Server's running at http://localhost:3333"),
);
