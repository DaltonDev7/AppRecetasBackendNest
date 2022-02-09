import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) { }

    public async getAll(): Promise<Usuario[]> {

        const data = await this.usersRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.Roles', 'rolesUsuario')
            .select([
                'user.Id  as  Id',
                'user.Nombres as Nombres',
                'user.Apellidos as Apellidos',
                'rolesUsuario.Id as IdRol',
                'rolesUsuario.Id as NombreRol'
            ])

            return await data.getRawMany()
       // return await this.usersRepository.find();
    }

    public async getById(Id: number) {
        const user = await this.usersRepository.findOneOrFail(Id)
        if (user)
            return user
        else
            throw new NotFoundException('El Id del usuario no existe')
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

}

