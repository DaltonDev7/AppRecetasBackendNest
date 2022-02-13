import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredienteRepository } from '../../core/repositories/ingrediente-receta.repository';
import { PasosRecetasRepository } from '../../core/repositories/pasos-recetas.repository';
import { PostRecetaRepository } from '../../core/repositories/PostRecetas.repository';
import { PostRecetaController } from './post-receta.controller';
import { PostRecetaService } from './services/postreceta.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    PostRecetaRepository,
    IngredienteRepository,
    PasosRecetasRepository
  ])],
  controllers: [PostRecetaController],
  providers: [PostRecetaService]
})
export class PostRecetasModule { }
