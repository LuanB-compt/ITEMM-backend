import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService{
    private readonly userRepository: UserRepository = new UserRepository();

    constructor () {}

    public async getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findUserById(id);
    }
}
