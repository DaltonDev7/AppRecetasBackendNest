import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from '../../../core/guards/jwt.guard';
import { TareaService } from '../../../core/services/tarea.service';
import { Tarea } from '../../../entities/Tarea';

@Controller('tarea')
export class TareaController {
    constructor(private tareaService: TareaService) { }


    @UseGuards(JwtAuthGuard)
    @Get('GetAll')
    async getTareas(@Req() req: Request, @Res() res: Response) {

        try {
            return res.status(200).json(
                await this.tareaService.getAll()
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }


    @UseGuards(JwtAuthGuard)
    @Get('GetByIdUsuario/:idUsuario')
    async GetByIdUsuario(@Param('idUsuario', ParseIntPipe) id: number,  @Res() res: Response) {

        try {
            return res.status(200).json(
                await this.tareaService.getTareaByIdUsuario(id)
            )

        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('Save')
    async Save(@Body() tarea: Tarea, @Res() res: Response) {
        try {
            console.log(tarea);
            await this.tareaService.save(tarea).then(() => {
                return res.status(201).json({
                    msg: 'Tarea Creada'
                })
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete('Delete/:id')
    async Delete(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        try {

             await this.tareaService.delete(id).then(() => {
                return res.json({
                    msg: 'Tarea Eliminado'
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
