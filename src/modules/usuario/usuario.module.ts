import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioService } from '../../core/services/usuario.service';
import { Usuario } from '../../entities/Usuario';
import { UsuarioController } from './controllers/usuario/usuario.controller';
import { MapperService } from '../../shared/mapper/mapper.service';
import { SharedModule } from '../../shared/shared.module';
import { ImagenManagerService } from '../../core/services/imagen-manager.service';
import { ImagenRecetaRepository } from '../../core/repositories/imagen-receta.repository';
import { PostRecetaRepository } from '../../core/repositories/PostRecetas.repository';


@Module({
  imports:[
    TypeOrmModule.forFeature([Usuario,ImagenRecetaRepository,PostRecetaRepository]),
    SharedModule,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, ImagenManagerService],
})
export class UsuarioModule { }
