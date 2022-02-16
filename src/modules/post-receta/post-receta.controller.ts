import { Body, Controller, Get, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { of } from 'rxjs';
import { CreatePostRecetaDTO } from '../../core/dto/create-postrecetas-dto';
import { storageConfig } from '../../core/helpers/image-helper';
import { PostRecetaService } from './services/postreceta.service';

@Controller('postreceta')
export class PostRecetaController {


    constructor(
        private postRecetaService: PostRecetaService
    ) { }

    @Post('Save')
    @UseInterceptors(FilesInterceptor('file', 5, storageConfig('postImages')))
    async savePost(@UploadedFiles() file: Express.Multer.File[], @Body() payload: CreatePostRecetaDTO, @Res() res: Response) {

        try {
            console.log(file);
            
            payload.Imagenes = file
            await this.postRecetaService.savePost(payload).then(() => {
                return res.status(201).json({
                    msg: 'Post Creado'
                })
            })

        } catch (error) {
            console.log(error);
            
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }



    @Get('GetPostByUser')
    async getTareas(@Req() req: Request, @Res() res: Response) {

        try {
            return res.status(200).json(
              await this.postRecetaService.getPostByIdUser(2)
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
