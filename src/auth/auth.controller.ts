import { Controller, Post, Body } from '@nestjs/common';
import { AuthLoginUseCase } from './use_case/login.use-case';
import { LoginDto } from './core/dto/auth.dto';

@Controller('/api/auth')
export class AuthController {
    constructor(private readonly authLoginUseCase: AuthLoginUseCase) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        return await this.authLoginUseCase.login(loginDto.email, loginDto.password);
    }
}