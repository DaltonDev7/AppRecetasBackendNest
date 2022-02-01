import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { genSalt, hash } from 'bcryptjs';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/Usuario';

@Injectable()
export class AuthManagerService {
    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) { }

    public async verificarCorreo(correo: string): Promise<Usuario> {
        return await this.usersRepository.findOne({
            where: { Email: correo }
        })
    }

    public async encriptarPassWord(password:string) {
        const salt = await genSalt(10);
        return await hash(password , salt)
    }

}
