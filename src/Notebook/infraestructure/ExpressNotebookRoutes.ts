import { Router } from 'express';
import { ExpressNotebookController } from './ExpressNotebookController';

const controller = new ExpressNotebookController();
const ExpressNotebookRoutes = Router();

ExpressNotebookRoutes.post('/notebooks', controller.create);
ExpressNotebookRoutes.get('/notebooks', controller.getAll);
ExpressNotebookRoutes.get('/notebooks/:id', controller.getById);
ExpressNotebookRoutes.put('/notebooks/:id', controller.edit);
ExpressNotebookRoutes.delete('/notebooks/:id', controller.deleteById);

export { ExpressNotebookRoutes };
