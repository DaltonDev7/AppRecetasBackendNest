import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from '../../core/services/usuario.service';
import { Usuario } from '../../entities/Usuario';
import { UsuarioController } from './controllers/usuario/usuario.controller';


@Module({
  imports:[TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule { }
