import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { RolService } from '../../core/services/rol.service';
import { Rol } from '../../entities/Rol';

@Controller('rol')
export class RolController {

    constructor(
        private readonly rolService: RolService
    ) { }


    @Get('GetAll')
    async GetAll(@Res() res: Response) {
        try {
        
            return res.status(200).json(
                await this.rolService.getAll()
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @Get('GetById/:id')
    async GetById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        try {
        
            return res.status(200).json(
                await this.rolService.getById(id)
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @Post('Save')
    async Save(@Body() rol: Rol, @Res() res: Response) {
        try {
        
            await this.rolService.create(rol).then(() => {
                return res.status(201).json({
                    msg: 'Rol Creado'
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
