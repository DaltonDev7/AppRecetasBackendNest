import { Body, Controller, Get, Param, ParseIntPipe, Post, Req, Res, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { of } from 'rxjs';
import { CreatePostRecetaDTO } from '../../core/dto/create-postrecetas-dto';
import { storageConfig } from '../../core/helpers/image-helper';
import { PostRecetaService } from './services/postreceta.service';
import { ImagenesPostService } from './services/imagenes-post.service';

@Controller('postreceta')
export class PostRecetaController {


    constructor(
        private postRecetaService: PostRecetaService,
        private imagenesPostService: ImagenesPostService
    ) { }

    @Post('Save')
    // @UseInterceptors(FilesInterceptor('file', 5, storageConfig('postImages')))
    async savePost(@Body() payload: CreatePostRecetaDTO, @Res() res: Response) {

        try {

            await this.postRecetaService.savePost(payload).then((data) => {
                return res.status(201).json({
                    msg: 'Post Creado',
                    IdPost: data.Id
                })
            })

        } catch (error) {

            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @Post('SaveImagenesPost')
    @UseInterceptors(FilesInterceptor('file', 5, storageConfig('postImages')))
    async saveImagenesPost(@UploadedFiles() files: Express.Multer.File[], @Body() body, @Res() res: Response) {
        try {

            if (files != undefined) {
                await this.postRecetaService.saveImagenesPost(files, body.IdPost)
                return res.status(201).json({
                    msg: 'Imagenes Guardadas'
                })

            }
            return res.status(204).json({ msg: 'Ok' })
        } catch (error) {

            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }



    @Get('GetPostByUser/:id')
    async GetPostByUser(@Param('id', ParseIntPipe) idUser: number, @Req() req: Request, @Res() res: Response) {

        try {
            // this.postRecetaService.getPostByIdUser(idUser).then((data) => {
            //     return res.status(200).json({
            //         data
            //     })
            // })
            return res.status(200).json(
                await this.postRecetaService.getPostByIdUser(idUser)
            )
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }

    @Get('GetPostById/:id')
    async GetPostById(@Param('id', ParseIntPipe) idPost: number, @Req() req: Request, @Res() res: Response) {

        try {
            this.postRecetaService.getPostById(idPost).then((data) => {
                return res.status(200).json(data)
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Ha ocurrido un error',
                error
            })
        }
    }



}
