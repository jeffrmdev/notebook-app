import { Router } from 'express';
import { ExpressNoteController } from './ExpressNoteController';

const controller = new ExpressNoteController();
const ExpressNoteRoutes = Router();

ExpressNoteRoutes.post('/notes', controller.create);
ExpressNoteRoutes.get('/notes', controller.getAll);
ExpressNoteRoutes.get('/notes/:id', controller.getById);
ExpressNoteRoutes.put('/notes/:id', controller.edit);
ExpressNoteRoutes.delete('/notes/:id', controller.deleteById);

export { ExpressNoteRoutes };
