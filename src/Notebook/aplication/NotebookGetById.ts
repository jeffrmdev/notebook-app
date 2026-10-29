import { Notebook } from '../domain/Notebook';
import { NotebookRepository } from '../domain/NotebookRepository';

export class NotebookGetById {
    constructor(private notebookRepository: NotebookRepository) {}
    async execute(id: number): Promise<Notebook | null> {
        return await this.notebookRepository.getById(id);
    }
}
