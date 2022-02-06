import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolController } from './rol.controller';
import { RolRepository } from '../../core/repositories/rol.repository';
import { RolService } from '../../core/services/rol.service';

@Module({
  imports:[ TypeOrmModule.forFeature([RolRepository])],
  controllers: [RolController],
  providers:[RolService]
})
export class RolModule {}
