import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '../../Shared/infraestructure/ServiceContainer';

export class ExpressNotebookController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await ServiceContainer.notebook.create.execute(req.body);
            res.status(201).json({ message: 'Notebook created successfully' });
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const notebooks = await ServiceContainer.notebook.getAll.execute();
            res.json(notebooks);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (Number.isNaN(id)) {
                res.status(400).json({ message: 'Invalid notebook id' });
                return;
            }
            const notebook = await ServiceContainer.notebook.getById.execute(id);
            if (!notebook) {
                res.status(404).json({ message: 'Notebook not found' });
                return;
            }
            res.json(notebook);
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (Number.isNaN(id)) {
                res.status(400).json({ message: 'Invalid notebook id' });
                return;
            }
            await ServiceContainer.notebook.deleteById.execute(id);
            res.status(200).json({ message: 'Notebook deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            if (Number.isNaN(id)) {
                res.status(400).json({ message: 'Invalid notebook id' });
                return;
            }
            await ServiceContainer.notebook.edit.execute({ ...req.body, id });
            res.status(200).json({ message: 'Notebook updated successfully' });
        } catch (error) {
            next(error);
        }
    }
}
