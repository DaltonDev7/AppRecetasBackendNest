import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';
import { UserDataDTO } from '../dto/user-data-dto';
import { MapperService } from '../../shared/mapper/mapper.service';
import { from, of, skip } from 'rxjs';
import { ImagenManagerService } from './imagen-manager.service';
import { BuscadorUserDTO } from '../dto/buscador-user.dto';
import { PostRecetaRepository } from '../repositories/PostRecetas.repository';
const fs = require('fs');
@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
        @InjectRepository(PostRecetaRepository)
        private readonly postRecetaRepository: PostRecetaRepository,
        private mapperService: MapperService,
        private imagenManagerService: ImagenManagerService
    ) { }

    public async getAll() {

        let data = await this.usersRepository.find()
        return data
        // const data = await this.usersRepository.createQueryBuilder('user')
        //     .leftJoinAndSelect('user.Roles', 'rolesUsuario')
        //     .select([
        //         'user.Id  as  Id',
        //         'user.Nombres as Nombres',
        //         'user.Apellidos as Apellidos',
        //         'rolesUsuario.Id as IdRol',
        //         'rolesUsuario.Id as NombreRol'
        //     ])

        //     return await data.getRawMany()
        // return await this.usersRepository.find();
    }

    public async getById(Id: number) {
        const user = await this.usersRepository.findOne(Id)
        if (user) {

            return this.mapperService.map<Usuario, UserDataDTO>(user, new UserDataDTO())

            //return this.mapperService.map<Usuario, UserDataDTO>(user, new UserDataDTO())

        } else {
            throw new NotFoundException('El Id del usuario no existe')
        }
    }

    public async create(usuario: Usuario) {

        let newUser = await this.usersRepository.create(usuario)
        await this.usersRepository.save(newUser)
    }

    public async update(usuario: Usuario) {

        // let updateUser = await this.usersRepository.findOneOrFail(usuario.Id)
        // console.log(updateUser);

        return await this.usersRepository.update(usuario.Id, usuario)
    }

    public async deleteUser(Id: number) {
        let user = await this.usersRepository.findOneOrFail(Id)
        if (user)
            return await this.usersRepository.remove(user)
        else
            throw new NotFoundException('El Id del usuario no existe')
    }

    public async getUsers(idUsuario: number) {
        console.log(idUsuario);

        let usuarios = await this.usersRepository.createQueryBuilder('user')
            .where('user.Id != :Id', { Id: idUsuario }).getMany()


        let dataFormat = usuarios.map(async (user: Usuario) => {
            return {
                Id: user.Id,
                NombreCompleto: user.Nombres + ' ' + user.Apellidos,
                FechaCreacion: user.FechaCreacion,
                ImgUsuario: await this.imagenManagerService.getUsuarioImagen(user),
                RecetasCount: await this.countRecetasByUser(user),
            }
        })

        let datosFinales = Promise.all(dataFormat)
        return datosFinales

    }

    public async buscadorUsuarios(data: BuscadorUserDTO) {
        let usuarios = await this.usersRepository.find({ Nombres: Like(`%${data.NombreUsuario}%`) })

        let dataFormat = usuarios.map(async (user: Usuario) => {
            return {
                Id: user.Id,
                NombreCompleto: user.Nombres + ' ' + user.Apellidos,
                FechaCreacion: user.FechaCreacion,
                ImgUsuario: await this.imagenManagerService.getUsuarioImagen(user),
                RecetasCount: await this.countRecetasByUser(user),
            }
        })

        let datosFinales = Promise.all(dataFormat)
        return datosFinales
    }

    public async countRecetasByUser(usuario: Usuario) {
        console.log(usuario);

        return await this.postRecetaRepository.count({ where: { IdUsuario: usuario } })


    }

}

