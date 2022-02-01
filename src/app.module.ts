import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TareaModule } from './modules/tarea/tarea.module';
import config from '../ormconfig'
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsuarioModule,
    TareaModule,
    AuthModule
    // AppRoutingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
