import { User } from "../interface/user.interface";

export interface IAuthRepository {
    createUser(user: User): Promise<User>;
    login(email: string, password: string): Promise<User | null>;

}