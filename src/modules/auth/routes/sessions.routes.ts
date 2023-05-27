import { Router } from 'express';
import { SessionsController } from '../controllers/SessionsController';
import { Joi, Segments, celebrate } from 'celebrate';

const sessionsRouter = Router();

const sessionsController = new SessionsController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().required().min(8),
      document: Joi.string().required(),
    },
  }),
  sessionsController.create
);

export default sessionsRouter;
