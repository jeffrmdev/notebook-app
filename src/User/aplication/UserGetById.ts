import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserGetById {
    constructor(private userRepository: UserRepository) {}
    async execute(id: string): Promise<User | null> {
        return await this.userRepository.getById(id);
    }
}