import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserDeleteById {
    constructor(private userRepository: UserRepository) {}
    async execute(id: string): Promise<void> {
        await this.userRepository.deleteById(id);
    }
}