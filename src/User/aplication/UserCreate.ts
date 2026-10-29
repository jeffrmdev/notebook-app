import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserCreate {
    constructor(private userRepository: UserRepository) {}
    async execute(user: User): Promise<void> {
        await this.userRepository.save(user);
    }
}