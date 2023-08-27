import { Injectable, Inject } from '@nestjs/common';
import { IAuthRepository } from '../core/repository/auth.repository';
import { User } from '../core/interface/user.interface';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthLoginUseCase {
    constructor(@Inject('InMemoryRepository') private readonly authRepository: IAuthRepository) {}

    async login(email: string, password: string): Promise<{ userId: string; token: string} | null> {
        const user = await this.authRepository.login(email, password);

        if(!user){
            return null;
        }

        const token = jwt.sign({ userId: user.id }, 'RANDOM_SECRET_KEY', {expiresIn: '1h'});

        return {userId: user.id, token}
    }
}