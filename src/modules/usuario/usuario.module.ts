import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioService } from '../../core/services/usuario.service';
import { Usuario } from '../../entities/Usuario';
import { UsuarioController } from './controllers/usuario/usuario.controller';
import { MapperService } from '../../shared/mapper/mapper.service';
import { SharedModule } from '../../shared/shared.module';


@Module({
  imports:[
    TypeOrmModule.forFeature([Usuario]),
    SharedModule
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule { }
