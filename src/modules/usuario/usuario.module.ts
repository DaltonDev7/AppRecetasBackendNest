import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario/usuario.controller';


@Module({
  controllers: [UsuarioController],
  
})
export class UsuarioModule {}
