import { Body, Controller, Post, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from '../../../../core/services/auth.service';
import { Usuario } from '../../../../entities/Usuario';
import { SignInDTO } from '../../../../core/dto/Signin-dto';
import { JwtAuthGuard } from '../../../../core/guards/jwt.guard';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { storageConfig } from '../../../../core/helpers/image-helper';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

   
    @Post('Registrar')
    @UseInterceptors(FileInterceptor('ImagenPerfil', storageConfig('PerfilImages')))
    async Save(@UploadedFile() file: Express.Multer.File, @Body() user: Usuario, @Res() res: Response) {
        try {
            user.ImagenPerfil = file.path
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

    @Post('prueba')
    async prueba(@Body() data: Usuario, @Res() res: Response) {
        try {
            console.log(data);
            
   
            return res.status(201).json({
                msg: 'Usuario Registrado'
        })

        } catch (error) {
            console.log(error);
            
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
