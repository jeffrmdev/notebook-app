import { Notebook } from '../domain/Notebook';
import { NotebookRepository } from '../domain/NotebookRepository';

export class NotebookGetAll {
    constructor(private notebookRepository: NotebookRepository) {}
    async execute(): Promise<Notebook[]> {
        return await this.notebookRepository.getAll();
    }
}
