import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Tarea } from '../../entities/Tarea';

@Injectable()
export class TareaService {

    constructor(
        @InjectRepository(Tarea)
        private tareaRepository: Repository<Tarea>,
    ) { }

    public async save(tarea: Tarea): Promise<Tarea> {
        let newTarea = await this.tareaRepository.create(tarea);
        return this.tareaRepository.save(newTarea)
    }

    public async getAll(): Promise<Tarea[]> {

        const data = await this.tareaRepository.createQueryBuilder('tarea')
            .leftJoinAndSelect('tarea.Usuario', 'usuario')
            .select([
                'tarea.Id as Id',
                'tarea.Descripcion as Descripcion',
                'tare.FechaCreacion as FechaCreacion',
                'usuario.Id as IdUsuario',
                'usuario.Nombres as NombreUsuario',
                'usuario.Apellidos as ApellidoUsuario'
            ])

        return await data.getRawMany()
    }

    public async getTareaByIdUsuario(idUsuario: number) {

        const data = await this.tareaRepository.createQueryBuilder('tarea')
            .leftJoinAndSelect('tarea.Usuario', 'usuario')
            .where('usuario.Id = :Id', { Id: idUsuario })
            .select([
                'tarea.Descripcion as Descripcion',
                'tarea.FechaCreacion as FechaCreacion',
                'usuario.Id as IdUsuario',
                'usuario.Nombres as NombreUsuario',
                'usuario.Apellidos as ApellidoUsuario'
            ])

            return await data.getRawMany()

    }

    public async delete(Id: number) {
        let tarea = await this.tareaRepository.findOne(Id)
        
        if (tarea != undefined)
            return this.tareaRepository.remove(tarea)
        else
            throw new NotFoundException('El Id de la tarea no existe')
        
    }

}
