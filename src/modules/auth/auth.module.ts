import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
//import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthManagerService } from '../../core/services/auth-manager.service';
import { AuthService } from '../../core/services/auth.service';
import { RolService } from '../../core/services/rol.service';
import { Usuario } from '../../entities/Usuario';
import { AuthController } from './controllers/auth/auth.controller';
import { JwtStrategyService } from './strategies/jwt.strategy';
import { RolRepository } from '../../core/repositories/rol.repository';
import { RolesUsuariosRepository } from '../../core/repositories/rolesUsuarios.repository';

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([Usuario, RolRepository, RolesUsuariosRepository]),
    // PassportModule.register({
    //     defaultStrategy : 'jwt'
    // }),
    // JwtModule.registerAsync({
    //     imports:[]
    // })
  ],
  providers: [AuthService, AuthManagerService, RolService],
  //  exports:[JwtStrategyService]
})
export class AuthModule { }
