import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, genSalt, hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';
import { SignInDTO } from '../dto/Signin-dto';

@Injectable()
export class AuthManagerService {
    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) { }

    public async verificarCorreo(correo: string): Promise<Usuario> {
        console.log('entro');
        
        return await this.usersRepository.findOne({
            where: { Email: correo }
        })
    }

    public async encriptarPassWord(password: string) {
        const salt = await genSalt(10);
        return await hash(password, salt)
    }

    public async verificarPassword(usuario: Usuario, data: SignInDTO) {
        return await compare(data.PassWord, usuario.PassWord)
        //if (!passwordVerificated) return new UnauthorizedException('Credenciales incorrectas')
    }

}
