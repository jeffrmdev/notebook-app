import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '../../Shared/infraestructure/ServiceContainer';

export class ExpressNoteController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await ServiceContainer.note.create.execute(req.body);
            res.status(201).json({ message: 'Note created successfully' });
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const notes = await ServiceContainer.note.getAll.execute();
            res.json(notes);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (Number.isNaN(id)) {
                res.status(400).json({ message: 'Invalid note id' });
                return;
            }
            const note = await ServiceContainer.note.getById.execute(id);
            if (!note) {
                res.status(404).json({ message: 'Note not found' });
                return;
            }
            res.json(note);
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (Number.isNaN(id)) {
                res.status(400).json({ message: 'Invalid note id' });
                return;
            }
            await ServiceContainer.note.deleteById.execute(id);
            res.status(200).json({ message: 'Note deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (Number.isNaN(id)) {
                res.status(400).json({ message: 'Invalid note id' });
                return;
            }
            await ServiceContainer.note.edit.execute({ ...req.body, id });
            res.status(200).json({ message: 'Note updated successfully' });
        } catch (error) {
            next(error);
        }
    }
}
