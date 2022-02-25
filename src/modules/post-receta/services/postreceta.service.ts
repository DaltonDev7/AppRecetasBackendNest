import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostRecetaDTO } from '../../../core/dto/create-postrecetas-dto';
import { PostRecetaRepository } from '../../../core/repositories/PostRecetas.repository';
import { IngredientesRecetas } from '../../../entities/IngredientesRecetas';
import { PostRecetas } from '../../../entities/PostRecetas';
import { IngredienteRepository } from '../../../core/repositories/ingrediente-receta.repository';
import { PasosRecetas } from '../../../entities/PasosRecetas';
import { PasosRecetasRepository } from '../../../core/repositories/pasos-recetas.repository';
import { ImagenRecetaRepository } from '../../../core/repositories/imagen-receta.repository';
import { ImagenesPostService } from './imagenes-post.service';

@Injectable()
export class PostRecetaService {

    constructor(
        @InjectRepository(PostRecetaRepository)
        private readonly postRecetaRepository: PostRecetaRepository,
        @InjectRepository(IngredienteRepository)
        private readonly ingredienteRepository: IngredienteRepository,
        @InjectRepository(PasosRecetasRepository)
        private readonly PasosRecetasRepository: PasosRecetasRepository,
        @InjectRepository(ImagenRecetaRepository)
        private readonly imagenRecetasRepository: ImagenRecetaRepository,
        private imagenesPostService : ImagenesPostService
    ) { }

    async savePost(postReceta: CreatePostRecetaDTO) {

        //creamos el post
        let dataPost = await this.postRecetaRepository.create(postReceta.PostReceta)
        let postCreated: PostRecetas = await this.postRecetaRepository.save(dataPost)

        //creamos ingredientes y los pasos
        await this.ingredienteRepository.saveAllIngrediente(postReceta.Ingredientes, postCreated)
        await this.PasosRecetasRepository.saveAllPasos(postReceta.PasosRecetas, postCreated)

        //guardamos las imagenes
        let imagenesPost = this.imagenesPostService.getImagenesPost()
        console.log('todos las imagenes' + imagenesPost);
        
        await this.imagenRecetasRepository.saveImagenes(imagenesPost, postCreated)

    }

    async getPostByIdUser(idUser: number) {

       return await this.postRecetaRepository.find({
            where : { Usuario : idUser}
         })

      //  return await data.get

        // return await this.postRecetaRepository.createQueryBuilder('post')
        // .leftJoinAndSelect('post.Usuario', 'usuario')
        // .where('usuario.Id = :Id', { Id: idUser })
        //     .select([
        //         'post.Id as Id',
        //         'post.Titulo as Descripcion',
        //         'post.Descripcion as Descripcion',
        //         'post.CantidadPersona as CantidadPersona',
        //         'post.FechaCreacion as FechaCreacion',
        //         'usuario.Id as IdUsuario',
        //         'usuario.Nombres as NombreUsuario',
        //         'usuario.Apellidos as ApellidoUsuario'
        //     ]).getRawMany()


    }

}
