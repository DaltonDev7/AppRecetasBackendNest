import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';
import { AuthManagerService } from './auth-manager.service';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
        private authManagerService: AuthManagerService
    ) { }

    async registrarUser(usuario: Usuario) {

        let existCorreo = await this.authManagerService.verificarCorreo(usuario.Email)
        console.log(existCorreo);

        if (existCorreo)
            throw new BadRequestException('Este correo ya esta registrado')

        let passWordEncriptado = await this.authManagerService.encriptarPassWord(usuario.PassWord)
        usuario.PassWord = passWordEncriptado

        let newUser = await this.usersRepository.create(usuario)
        await this.usersRepository.save(newUser)

    }

}
