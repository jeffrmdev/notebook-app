import { NextFunction, Request, Response } from 'express';
import { ServiceContainer } from '../../Shared/infraestructure/ServiceContainer';

export class ExpressUserController {
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await ServiceContainer.user.create.execute(req.body);
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users = await ServiceContainer.user.getAll.execute();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = await ServiceContainer.user.getById.execute(String(req.params.id));
            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.json(user);
        } catch (error) {
            next(error);
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await ServiceContainer.user.deleteById.execute(String(req.params.id));
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await ServiceContainer.user.edit.execute({ ...req.body, id: String(req.params.id) });
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            next(error);
        }
    }
}