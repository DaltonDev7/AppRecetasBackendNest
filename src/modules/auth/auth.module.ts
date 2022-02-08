import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
//import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthManagerService } from '../../core/services/auth-manager.service';
import { AuthService } from '../../core/services/auth.service';
import { RolService } from '../../core/services/rol.service';
import { Usuario } from '../../entities/Usuario';
import { AuthController } from './controllers/auth/auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RolRepository } from '../../core/repositories/rol.repository';
import { RolesUsuariosRepository } from '../../core/repositories/rolesUsuarios.repository';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JWT_SECRET } from '../../core/constants/env.constants';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      RolRepository,
      RolesUsuariosRepository
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get(JWT_SECRET),
        signOptions: {
          expiresIn: 7200
        }
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [
    AuthService,
    AuthManagerService,
    RolService,
    //JwtService,
    JwtStrategy,
    ConfigService
  ],
  exports: [
    PassportModule,
    //JwtService,
    JwtStrategy,
  ]
})
export class AuthModule { }
