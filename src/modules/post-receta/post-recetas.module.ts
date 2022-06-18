import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenRecetaRepository } from '../../core/repositories/imagen-receta.repository';
import { IngredienteRepository } from '../../core/repositories/ingrediente-receta.repository';
import { NutricionRepository } from '../../core/repositories/nutricion.repository';
import { PasosRecetasRepository } from '../../core/repositories/pasos-recetas.repository';
import { PostRecetaRepository } from '../../core/repositories/PostRecetas.repository';
import { ImagenManagerService } from '../../core/services/imagen-manager.service';
import { NutricionService } from '../../core/services/nutricion.service';
import { Usuario } from '../../entities/Usuario';
import { PostRecetaController } from './post-receta.controller';
import { ImagenesPostService } from './services/imagenes-post.service';
import { PostRecetaService } from './services/postreceta.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    PostRecetaRepository,
    IngredienteRepository,
    PasosRecetasRepository,
    ImagenRecetaRepository,
    NutricionRepository,
    Usuario
  ])],
  controllers: [PostRecetaController],
  providers: [PostRecetaService, ImagenesPostService, ImagenManagerService, NutricionService]
})
export class PostRecetasModule { }
