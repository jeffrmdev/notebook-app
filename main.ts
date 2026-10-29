import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { ForeignKeyConstraintError, UniqueConstraintError, ValidationError } from 'sequelize';
import { initDatabase } from './src/Shared/infraestructure/database';
import { ExpressUserRoutes } from './src/User/infraestructure/ExpressUserRoutes';
import { ExpressNotebookRoutes } from './src/Notebook/infraestructure/ExpressNotebookRoutes';
import { ExpressNoteRoutes } from './src/Notes/infraestructure/ExpressNoteRoutes';

const app = express();

app.use(express.json());
app.use(ExpressUserRoutes);
app.use(ExpressNotebookRoutes);
app.use(ExpressNoteRoutes);

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error);

    if (error instanceof ForeignKeyConstraintError) {
        res.status(400).json({ message: 'Related resource does not exist' });
        return;
    }

    if (error instanceof UniqueConstraintError) {
        res.status(409).json({ message: 'Resource already exists', errors: error.errors.map(e => e.message) });
        return;
    }

    if (error instanceof ValidationError) {
        res.status(400).json({ message: 'Invalid data', errors: error.errors.map(e => e.message) });
        return;
    }

    res.status(500).json({ message: 'Internal server error' });
});

const port = Number(process.env.PORT) || 3000;

initDatabase()
    .then(() => {
        console.log('Database initialized successfully');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Error initializing database:', error);
        process.exit(1);
    });
