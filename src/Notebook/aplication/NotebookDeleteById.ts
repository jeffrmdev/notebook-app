import { NotebookRepository } from '../domain/NotebookRepository';

export class NotebookDeleteById {
    constructor(private notebookRepository: NotebookRepository) {}
    async execute(id: number): Promise<void> {
        await this.notebookRepository.deleteById(id);
    }
}
