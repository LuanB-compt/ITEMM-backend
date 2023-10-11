import { UserRepository } from "../repositories/UserRepository";
import { User } from "../models/User";

export class UserService{
    private readonly userRepository: UserRepository = new UserRepository();

    constructor () {}

    public async getUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findUserById(id);
    }

    public async postCreateUser(newUser: User): Promise<User | undefined> {
        return this.userRepository.createUser(newUser);
    }
}
