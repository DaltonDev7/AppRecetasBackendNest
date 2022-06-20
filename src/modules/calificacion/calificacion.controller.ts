import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ISaveCalificacion } from '../../core/interfaces/save-calificacion';
import { CalificacionService } from './services/calificacion.service';

@Controller('calificacion')
export class CalificacionController {

    constructor(private calificacionService: CalificacionService) { }

    @Post('Save')
    async save(@Body() payload: ISaveCalificacion, @Res() res: Response) {
        try {

            await this.calificacionService.save(payload).then((data) => {
                return res.status(201).json({
                    msg: 'Guardado',
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
