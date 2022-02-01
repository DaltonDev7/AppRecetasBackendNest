import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../../../../core/services/auth.service';
import { Usuario } from '../../../../entities/Usuario';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('Registrar')
    async Save(@Body() user: Usuario, @Res() res: Response) {
        try {
            console.log(user);
            await this.authService.registrarUser(user).then(() => {
                return res.status(201).json({
                    msg: 'Usuario Registrado'
                })
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


}
