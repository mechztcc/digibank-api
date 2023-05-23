import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';
import { Joi, Segments, celebrate } from 'celebrate';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      password: Joi.string().required().min(8),
      document: Joi.string().required(),
    },
  }),
  usersController.create
);

export default usersRouter;
