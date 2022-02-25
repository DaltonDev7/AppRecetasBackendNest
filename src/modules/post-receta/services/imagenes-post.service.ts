import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class ImagenesPostService {

    private imagenesPost: any[] = []

    setImagenesServices(imagenes) {
        this.imagenesPost = imagenes
    }

    getImagenesPost() {
        return this.imagenesPost
    }

}
