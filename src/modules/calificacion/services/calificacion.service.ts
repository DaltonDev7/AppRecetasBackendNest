import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ISaveCalificacion } from '../../../core/interfaces/save-calificacion';
import { CalificacionRepository } from '../../../core/repositories/calificacion.repository';
import { PostRecetaRepository } from '../../../core/repositories/PostRecetas.repository';
import { Usuario } from '../../../entities/Usuario';

@Injectable()
export class CalificacionService {

    constructor(
        @InjectRepository(PostRecetaRepository)
        private readonly postRecetaRepository: PostRecetaRepository,
        @InjectRepository(CalificacionRepository)
        private readonly calificacionRepository: CalificacionRepository,
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) { }


    public async save(payload: ISaveCalificacion) {

        let post = await this.postRecetaRepository.findOne({ where: { Id: payload.IdPost } })
        let usuario = await this.usersRepository.findOne({ where: { Id: payload.IdUsuario } })

        let calificacion = await this.calificacionRepository.findOne({ where: { Usuario: usuario, PostRecetas: post } })

        if(calificacion == undefined){
            await this.calificacionRepository.saveCalificacion(payload, post, usuario)
        }else{
            await this.calificacionRepository.updateCalificacion(payload, calificacion)
        }
    }







}
