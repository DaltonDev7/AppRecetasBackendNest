import { EntityRepository, Repository } from "typeorm";
import { ImagenesRecetas } from '../../entities/ImagenesReceta';
import { PostRecetas } from '../../entities/PostRecetas';


@EntityRepository(ImagenesRecetas)
export class ImagenRecetaRepository extends Repository<ImagenesRecetas> {


    async saveImagenes(files: any[], post: PostRecetas) {

        if (files != undefined) {
            files.forEach((file) => {

                let imagenReceta = new ImagenesRecetas()
                imagenReceta.NombreRuta = file.path
                imagenReceta.PostRecetas = post

            })
        }
    }

}