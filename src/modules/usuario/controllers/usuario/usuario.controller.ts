import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { Usuario } from '../../../../entities/Usuario';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioService: UsuarioService
    ) { }

    @Get('GetAll')
    async getUsers(@Req() req: Request, @Res() res: Response) {
        try {
            console.log('entroo');

            return res.status(200).json(
                await this.usuarioService.getAll()
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


    @Get('GetById/:id')
    async getById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        try {

            return res.status(200).json(
                await this.usuarioService.getById(id)
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @Post('Save')
    async Save(@Body() user: Usuario, @Res() res: Response) {
        try {
            console.log(user);
            await this.usuarioService.create(user).then(() => {
                return res.status(201).json({
                    msg: 'Usuario Creado'
                })
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @Put('Update')
    async Update(@Body() user: Usuario, @Res() res: Response) {
        try {
            console.log(user);
            await this.usuarioService.update(user).then((data) => {
                return res.json({
                    data,
                    msg: 'Usuario Actualizado'
                })
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


    @Delete('Delete/:id')
    async Delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        try {

             await this.usuarioService.deleteUser(id).then(() => {
                return res.json({
                    msg: 'Usuario Eliminado'
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
