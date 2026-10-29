import { Notebook } from './Notebook';

export interface NotebookRepository { 
    save(notebook: Notebook): Promise<void>;
    getAll(): Promise<Notebook[]>;
    getById(id: number): Promise<Notebook | null>;
    deleteById(id: number): Promise<void>;
    edit(notebook: Notebook): Promise<void>;
}
