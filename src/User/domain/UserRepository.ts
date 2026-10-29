import { User } from './User';

export interface UserRepository {
    save(user: User): Promise<void>;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    deleteById(id: string): Promise<void>;
    edit(user: User): Promise<void>;
}