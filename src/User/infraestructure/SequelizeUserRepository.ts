import { User } from '../domain/User';
import { UserModel } from './sequelize/UserModel';
import { UserRepository } from '../domain/UserRepository';

export class SequelizeUserRepository implements UserRepository {
    async save(user: User): Promise<void> {
        await UserModel.create(user);
    }

    async getAll(): Promise<User[]> {
        const users = await UserModel.findAll();
        return users.map(user => user.toJSON() as User);
    }

    async getById(id: string): Promise<User | null> {
        const user = await UserModel.findByPk(id);
        return user ? (user.toJSON() as User) : null;
    }

    async deleteById(id: string): Promise<void> {
        await UserModel.destroy({ where: { id } });
    }

    async edit(user: User): Promise<void> {
        await UserModel.update(user, { where: { id: user.id } });
    }
}