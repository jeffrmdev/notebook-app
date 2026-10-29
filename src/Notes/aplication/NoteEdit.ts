import { Notes } from '../domain/Note';
import { NoteRepository } from '../domain/NoteRepository';

export class NoteEdit {
    constructor(private noteRepository: NoteRepository) {}
    async execute(note: Notes): Promise<void> {
        await this.noteRepository.edit(note);
    }
}
