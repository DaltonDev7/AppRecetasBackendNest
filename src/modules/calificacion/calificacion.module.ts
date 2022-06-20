import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalificacionRepository } from '../../core/repositories/calificacion.repository';
import { PostRecetaRepository } from '../../core/repositories/PostRecetas.repository';
import { Usuario } from '../../entities/Usuario';
import { CalificacionController } from './calificacion.controller';
import { CalificacionService } from './services/calificacion.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario,CalificacionRepository, PostRecetaRepository])
  ],
  controllers: [CalificacionController],
  providers: [CalificacionService]
})
export class CalificacionModule { }
