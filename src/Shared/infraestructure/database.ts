import { sequelize } from './sequelize';

import '../../User/infraestructure/sequelize/UserModel';
import '../../Notebook/infraestructure/sequelize/NotebookModel';
import '../../Notes/infraestructure/sequelize/NoteModel';

// shortcut: sync() creates missing tables but never alters existing ones; switch to migrations before the first deploy.
export async function initDatabase() {
  await sequelize.authenticate();
  await sequelize.sync();
}
