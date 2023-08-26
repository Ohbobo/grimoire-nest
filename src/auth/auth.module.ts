import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthLoginUseCase } from './use_case/login.use-case';
import { InMemoryRepository } from './core/inMemorydata/in-memory.repository';

@Module({
    controllers: [AuthController],
    providers: [AuthLoginUseCase, 
    { provide: 'InMemoryRepository', useClass: InMemoryRepository }],
})
export class AuthModule {}