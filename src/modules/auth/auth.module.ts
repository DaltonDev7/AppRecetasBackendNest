import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthManagerService } from '../../core/services/auth-manager.service';
import { AuthService } from '../../core/services/auth.service';
import { Usuario } from '../../entities/Usuario';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
    controllers:[AuthController],
    imports:[TypeOrmModule.forFeature([Usuario])],
    providers:[AuthService,AuthManagerService]
})
export class AuthModule {}
