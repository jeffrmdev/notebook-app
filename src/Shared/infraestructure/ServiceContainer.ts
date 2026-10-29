import { UserCreate } from '../../User/aplication/UserCreate';
import { UserGetAll } from '../../User/aplication/UserGetAll';
import { UserGetById } from '../../User/aplication/UserGetById';
import { UserEdit } from '../../User/aplication/UserEdit';
import { UserDeleteById } from '../../User/aplication/UserDeleteById';
import { UserRepository } from '../../User/domain/UserRepository';
import { SequelizeUserRepository } from '../../User/infraestructure/SequelizeUserRepository';
import { NotebookCreate } from '../../Notebook/aplication/NotebookCreate';
import { NotebookGetAll } from '../../Notebook/aplication/NotebookGetAll';
import { NotebookGetById } from '../../Notebook/aplication/NotebookGetById';
import { NotebookEdit } from '../../Notebook/aplication/NotebookEdit';
import { NotebookDeleteById } from '../../Notebook/aplication/NotebookDeleteById';
import { NotebookRepository } from '../../Notebook/domain/NotebookRepository';
import { SequelizeNotebookRepository } from '../../Notebook/infraestructure/SequelizeNotebookRepository';
import { NoteCreate } from '../../Notes/aplication/NoteCreate';
import { NoteGetAll } from '../../Notes/aplication/NoteGetAll';
import { NoteGetById } from '../../Notes/aplication/NoteGetById';
import { NoteEdit } from '../../Notes/aplication/NoteEdit';
import { NoteDeleteById } from '../../Notes/aplication/NoteDeleteById';
import { NoteRepository } from '../../Notes/domain/NoteRepository';
import { SequelizeNoteRepository } from '../../Notes/infraestructure/SequelizeNoteRepository';

const userRepository: UserRepository = new SequelizeUserRepository();
const notebookRepository: NotebookRepository = new SequelizeNotebookRepository();
const noteRepository: NoteRepository = new SequelizeNoteRepository();

export const ServiceContainer = {
    user: {
        create: new UserCreate(userRepository),
        getAll: new UserGetAll(userRepository),
        getById: new UserGetById(userRepository),
        deleteById: new UserDeleteById(userRepository),
        edit: new UserEdit(userRepository),
    },
    notebook: {
        create: new NotebookCreate(notebookRepository),
        getAll: new NotebookGetAll(notebookRepository),
        getById: new NotebookGetById(notebookRepository),
        deleteById: new NotebookDeleteById(notebookRepository),
        edit: new NotebookEdit(notebookRepository),
    },
    note: {
        create: new NoteCreate(noteRepository),
        getAll: new NoteGetAll(noteRepository),
        getById: new NoteGetById(noteRepository),
        deleteById: new NoteDeleteById(noteRepository),
        edit: new NoteEdit(noteRepository),
    }
}
