import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { of } from 'rxjs';
import { storageConfig } from '../../core/helpers/image-helper';

@Controller('postreceta')
export class PostRecetaController {


    constructor() {

    }

    @Post('Save')
    @UseInterceptors(FileInterceptor('file', storageConfig('postImages')))
    savePost(@UploadedFile() payload: Express.Multer.File) {

        return of({ imagePath: payload.filename })

    }

}
