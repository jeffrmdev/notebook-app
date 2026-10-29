import { Router } from 'express';
import { ExpressUserController } from './ExpressUserController';

const controller = new ExpressUserController();
const ExpressUserRoutes = Router();

ExpressUserRoutes.post('/users', controller.create);
ExpressUserRoutes.get('/users', controller.getAll);
ExpressUserRoutes.get('/users/:id', controller.getById);
ExpressUserRoutes.put('/users/:id', controller.edit);
ExpressUserRoutes.delete('/users/:id', controller.deleteById);

export { ExpressUserRoutes };