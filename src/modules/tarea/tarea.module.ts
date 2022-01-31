import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareaService } from '../../core/services/tarea.service';
import { Tarea } from '../../entities/Tarea';
import { TareaController } from './controllers/tarea.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Tarea])
    ],
    controllers: [TareaController],
    providers: [
        TareaService
    ]
})
export class TareaModule { }
