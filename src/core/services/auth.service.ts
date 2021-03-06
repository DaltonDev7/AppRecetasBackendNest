import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';
import { AuthManagerService } from './auth-manager.service';

import { RolRepository } from '../repositories/rol.repository';
import { RolService } from './rol.service';

import { PerfilEnum } from '../enums/perfil.enums';
import { CreateRoleUsuario } from '../dto/create-roles-usuario-dto';
import { SignInDTO } from '../dto/Signin-dto';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
        private rolService: RolService,

        // @InjectRepository(RolRepository)
        // private rolRepository: RolRepository,
        private authManagerService: AuthManagerService,
        private readonly jwtService: JwtService
    ) { }

    async registrarUser(usuario: Usuario) {

        console.log(usuario);
        
        let existCorreo = await this.authManagerService.verificarCorreo(usuario.Email)
        if (existCorreo) throw new BadRequestException('Este correo ya esta registrado')

        let existUserName = await this.usersRepository.findOne({ where: { UserName: usuario.UserName } })
        if(existUserName) throw new BadRequestException('El Username ya esta registrado')

        let passWordEncriptado = await this.authManagerService.encriptarPassWord(usuario.PassWord)
        usuario.PassWord = passWordEncriptado

        let newUser = await this.usersRepository.create(usuario)

        let rolUser = await this.rolService.getById(PerfilEnum.USUARIO)
        newUser.Roles = [rolUser]

        await this.usersRepository.save(newUser)
    }

    async login(payload: SignInDTO) {
        const usuario = await this.usersRepository.findOne({ where: { Email: payload.Email } })
        if (!usuario) return new UnauthorizedException('Este correo no esta registrado')
        
        let passwordVerificated =  this.authManagerService.verificarPassword(payload, usuario)
        if (!passwordVerificated) return new UnauthorizedException('Credenciales incorrectas')

        const userPayload: IJwtPayload = {
            Id: usuario.Id,
            Email: usuario.Email
        }

        let token = await this.jwtService.sign(userPayload)
        return { token }
    }

}
