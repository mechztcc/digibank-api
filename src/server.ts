import 'reflect-metadata';
import 'express-async-errors';
import './shared/container';

import { config } from 'dotenv';

import express, { NextFunction, Request, Response } from 'express';
import DefaultException from './configs/errors/DefaultExcection';
import routes from './shared/routes';
import { errors } from 'celebrate';

config();
const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof DefaultException) {
    return res
      .status(error.statusCode)
      .json({ statusCode: error.statusCode, message: error.message });
  } else {
    console.log(error);
    return res
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  }
});

app.listen(3336, () => {
  console.log(`Server running at ${3336}`);
});
