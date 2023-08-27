import { Injectable, Inject } from '@nestjs/common';
import { IAuthRepository } from '../core/repository/auth.repository';
import { User } from '../core/interface/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupUseCase {
    constructor(@Inject('InMemoryRepository') private readonly authRepository: IAuthRepository) {}

    async signup(email: string, password: string): Promise<void> {
        const hash = await bcrypt.hash(password, 10);

        const newUser: User = {
            email: email,
            password: hash,
        };
       
        await this.authRepository.createUser(newUser);
    }
}