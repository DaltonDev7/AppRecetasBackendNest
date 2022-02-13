import { Body, Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
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
    @UseInterceptors(FileInterceptor('file', storageConfig('postImages')))
    async savePost(@UploadedFile() file: Express.Multer.File, @Body() payload: CreatePostRecetaDTO, @Res() res: Response) {

        try {

            await this.postRecetaService.savePost(payload).then(() => {
                return res.status(201).json({
                    msg: 'Post Creado'
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
