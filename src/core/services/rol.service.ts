import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from '../../entities/Rol';
import { RolRepository } from '../repositories/rol.repository';

@Injectable()
export class RolService {


    constructor(
        @InjectRepository(RolRepository)
        private readonly rolRepository: RolRepository
    ) { }

    public async create(rol: Rol) {

        let isExist = await this.rolRepository.findOne({
            where: { Nombre: rol.Nombre }
        })

        if (isExist) throw new BadRequestException('Este Rol ya esta registrado')

        let newRol = await this.rolRepository.create(rol)
        await this.rolRepository.save(newRol)

    }

    public async getAll(): Promise<Rol[]> {
        return await this.rolRepository.find()
    }

    public async getById(id: number) {
        let rol = await this.rolRepository.findOne({
            where: { Id: id }
        })

        console.log(rol);
        return rol

    }



}
