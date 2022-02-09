import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../../../../core/services/auth.service';
import { Usuario } from '../../../../entities/Usuario';
import { SignInDTO } from '../../../../core/dto/Signin-dto';
import { JwtAuthGuard } from '../../../../core/guards/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

   
    @Post('Registrar')
    async Save(@Body() user: Usuario, @Res() res: Response) {
        try {
          
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

    @Post('Login')
    async Login(@Body() data: SignInDTO, @Res() res: Response) {
        try {
            console.log(data);
            
            let token = await this.authService.login(data)
            return res.status(200).json(
                token
            )

        } catch (error) {
            console.log(error);
            
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


}
