import { NoteRepository } from '../domain/NoteRepository';

export class NoteDeleteById {
    constructor(private noteRepository: NoteRepository) {}
    async execute(id: number): Promise<void> {
        await this.noteRepository.deleteById(id);
    }
}
