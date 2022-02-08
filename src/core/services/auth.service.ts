import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';
import { AuthManagerService } from './auth-manager.service';
import { RolesUsuariosRepository } from '../repositories/rolesUsuarios.repository';
import { RolRepository } from '../repositories/rol.repository';
import { RolService } from './rol.service';
import { RolesUsuarios } from '../../entities/RolesUsuarios';
import { PerfilEnum } from '../enums/perfil.enums';
import { CreateRoleUsuario } from '../dto/create-roles-usuario-dto';
import { SignInDTO } from '../dto/Signin-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
        private rolService: RolService,
        @InjectRepository(RolesUsuariosRepository)
        private rolesUsuariosRepository: RolesUsuariosRepository,
        // @InjectRepository(RolRepository)
        // private rolRepository: RolRepository,
        private authManagerService: AuthManagerService,
        private readonly jwtService: JwtService
    ) { }

    async registrarUser(usuario: Usuario) {

        let existCorreo = await this.authManagerService.verificarCorreo(usuario.Email)
        if (existCorreo) throw new BadRequestException('Este correo ya esta registrado')

        let passWordEncriptado = await this.authManagerService.encriptarPassWord(usuario.PassWord)
        usuario.PassWord = passWordEncriptado

        let newUser = await this.usersRepository.create(usuario)


        await this.usersRepository.save(newUser).then(async (usuario: Usuario) => {

            let rolUsuario = {
                Usuario: usuario.Id,
                Rol: PerfilEnum.USUARIO
            }
            let newUsuarioRole = await this.rolesUsuariosRepository.create(rolUsuario)
            await this.rolesUsuariosRepository.save(newUsuarioRole)

        })

    }

    async login(payload: SignInDTO) {
        const usuario = await this.usersRepository.findOne({ where: { Email: payload.Email } })
        if (!usuario) return new UnauthorizedException('Este correo no esta registrado')

        let passwordVerificated = await this.authManagerService.verificarPassword(usuario, payload)
        if (!passwordVerificated) return new UnauthorizedException('Credenciales incorrectas')

        const userPayload = {
            Id: usuario.Id,
            Nombres: usuario.Nombres
        }

        let token = await this.jwtService.sign(userPayload)
        return { token }
    }

}
