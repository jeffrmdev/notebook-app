import { Notebook } from '../domain/Notebook';
import { NotebookModel } from './sequelize/NotebookModel';
import { NotebookRepository } from '../domain/NotebookRepository';

export class SequelizeNotebookRepository implements NotebookRepository {
    async save(notebook: Notebook): Promise<void> {
        const { id, ...attributes } = notebook;
        await NotebookModel.create(attributes);
    }

    async getAll(): Promise<Notebook[]> {
        const notebooks = await NotebookModel.findAll();
        return notebooks.map(notebook => notebook.toJSON() as Notebook);
    }

    async getById(id: number): Promise<Notebook | null> {
        const notebook = await NotebookModel.findByPk(id);
        return notebook ? (notebook.toJSON() as Notebook) : null;
    }

    async deleteById(id: number): Promise<void> {
        await NotebookModel.destroy({ where: { id } });
    }

    async edit(notebook: Notebook): Promise<void> {
        const { id, ...attributes } = notebook;
        await NotebookModel.update(attributes, { where: { id } });
    }
}
