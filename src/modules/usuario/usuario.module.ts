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
import { PostRecetaService } from '../post-receta/services/postreceta.service';
import { IngredienteRepository } from '../../core/repositories/ingrediente-receta.repository';
import { PasosRecetasRepository } from '../../core/repositories/pasos-recetas.repository';
import { ImagenesPostService } from '../post-receta/services/imagenes-post.service';
import { NutricionRepository } from '../../core/repositories/nutricion.repository';
import { NutricionService } from '../../core/services/nutricion.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Usuario,
      ImagenRecetaRepository,
      PostRecetaRepository,
      NutricionRepository,
      IngredienteRepository,
      PasosRecetasRepository]),
    SharedModule,
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService, ImagenManagerService, PostRecetaService, ImagenesPostService, NutricionService],

})
export class UsuarioModule { }
