import { Body, Controller, Delete, Get, Header, Param, ParseIntPipe, Post, Put, Req, Res, StreamableFile, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { Usuario } from '../../../../entities/Usuario';
import * as Jwt from "jsonwebtoken"
import { UserDataDTO } from '../../../../core/dto/user-data-dto';
import path = require('path');
import { JwtAuthGuard } from '../../../../core/guards/jwt.guard';
import { ImagenUsuarioDTO } from '../../../../core/dto/imagen-usuario-dto';
import { GetListUserDTO } from '../../../../core/dto/list-user.dto';
import { BuscadorUserDTO } from '../../../../core/dto/buscador-user.dto';
const fs = require('fs');


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


    // @Get('GetById/:id')
    // async getById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    //     try {

    //         return res.status(200).json(
    //             await this.usuarioService.getById(id)
    //         )

    //     } catch (error) {
    //         return res.status(500).json({
    //             msg: 'Ha ocurrido un error',
    //             error
    //         })
    //     }
    // }


    @Get('GetUserData')
    async GetUserData(@Req() req: Request, @Res() res: Response) {
        try {

            const token = req.header('Authorization')

            if (!token) {
                return res.status(401).json({
                    error: "El usuario necesita estar autenticado."
                })
            }

            let user: any = Jwt.verify(token, process.env.JWT_SECRET as string)

            await this.usuarioService.getById(user.Id).then((usuario: UserDataDTO) => {


                // if (!usuario.ImagenDefecto)
                //     contents = fs.readFileSync(usuario.ImagenPerfil, { encoding: 'base64' });



                return res.status(200).json({
                    ...usuario,
                    // ImageFile: 'data:image/png;base64,' + contents
                })

            })

            // res.sendFile(imageFormat, { root: './uploads' }


        } catch (error) {
            console.log(error);

            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


    @Post('GetImagenUsuario')
    GetImagenUsuario(@Body() imagenUsuarioDTO: ImagenUsuarioDTO, @Req() req: Request, @Res() res: Response) {

        let contents = fs.readFileSync(imagenUsuarioDTO.ImagenPerfil, { encoding: 'base64' });
        return res.status(200).json({
            imagen: 'data:image/png;base64,' + contents
        })
    }




    @Post('Save')
    async Save(@Body() user: Usuario, @Res() res: Response) {
        try {
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



    @Post('GetUsers')
    async GetUsers(@Body() data: GetListUserDTO, @Res() res: Response) {
        try {

            await this.usuarioService.getUsers(data.IdUsuario).then((data) => {
                return res.json({
                 data
                })
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


    @Post('BuscadorUser')
    async BuscadorUser(@Body() data: BuscadorUserDTO, @Res() res: Response) {
        try {

            await this.usuarioService.buscadorUsuarios(data).then((data) => {
                return res.json({
                 data
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
