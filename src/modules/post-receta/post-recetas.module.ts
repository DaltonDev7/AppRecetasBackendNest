import { Module } from '@nestjs/common';
import { PostRecetaController } from './post-receta.controller';

@Module({
  controllers: [PostRecetaController]
})
export class PostRecetasModule {}
