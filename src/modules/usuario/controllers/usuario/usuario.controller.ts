import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('usuario')
export class UsuarioController {


    @Get('GetAll')
    getUsers(@Req() req: Request, @Res() res: Response) {
        try {

            let users = [
                {
                    nombre: 'Dalton',
                    apellido: 'Tejada'
                }
            ]
            return res.status(200).json(
                users
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }
}
