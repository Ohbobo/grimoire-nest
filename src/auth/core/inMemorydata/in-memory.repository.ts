import { Injectable } from '@nestjs/common';
import { IAuthRepository } from '../repository/auth.repository';
import { User } from '../interface/user.interface';
import * as bcrypt from 'bcrypt';


@Injectable()
export class InMemoryRepository implements IAuthRepository {
    private users: User[] = []; 

    constructor() {
        const hash = bcrypt.hashSync('password123', 10);
        const fakeUser: User = {
            id: '1',
            email: "theo",
            password: hash,
        };
        this.users.push(fakeUser)
    }
    async login(email: string, password: string): Promise<User | null> {
        const user = this.users.find(user => user.email === email);
        if(!user){
            return null;
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(isPasswordMatch){
            return user;
        }

        return null;
    }
}