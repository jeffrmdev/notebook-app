import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

export class UserEdit {
    constructor(private userRepository: UserRepository) {}
    async execute(user: User): Promise<void> {
        await this.userRepository.edit(user);
    }
}