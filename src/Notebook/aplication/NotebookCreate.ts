import { Notebook } from '../domain/Notebook';
import { NotebookRepository } from '../domain/NotebookRepository';

export class NotebookCreate {
    constructor(private notebookRepository: NotebookRepository) {}
    async execute(notebook: Notebook): Promise<void> {
        await this.notebookRepository.save(notebook);
    }
}
