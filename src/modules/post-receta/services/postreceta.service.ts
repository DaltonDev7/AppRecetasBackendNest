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
import { ImagenesRecetas } from '../../../entities/ImagenesReceta';
const fs = require('fs');

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
    private imagenesPostService: ImagenesPostService
  ) { }

  async savePost(postReceta: CreatePostRecetaDTO) {

    //creamos el post
    let dataPost = await this.postRecetaRepository.create(postReceta.PostReceta)
    let postCreated: PostRecetas = await this.postRecetaRepository.save(dataPost)

    //creamos ingredientes y los pasos
    await this.ingredienteRepository.saveAllIngrediente(postReceta.Ingredientes, postCreated)
    await this.PasosRecetasRepository.saveAllPasos(postReceta.PasosRecetas, postCreated)

    return postCreated;

    // //guardamos las imagenes
    let imagenesPost = this.imagenesPostService.getImagenesPost()
    // console.log('todos las imagenes' + imagenesPost);

    //  await this.imagenRecetasRepository.saveImagenes(imagenesPost, postCreated)

  }

  async getPostByIdUser(idUser: number) {

    let postsUser: PostRecetas[] = await this.postRecetaRepository.find({
      where: { IdUsuario: idUser }
    })


    let postFormat = postsUser.map( (post: PostRecetas) => {
      return {
        Id: post.Id,
        UsuarioNombre: post.IdUsuario.Nombres,
        UsuarioApellido: post.IdUsuario.Apellidos,
        Titulo: post.Titulo,
        FechaCreacion: post.FechaCreacion,
        IdNivelDificultad: post.IdNivelDificultad,
        ImagenPost:  this.getImagenesByPost(post).then((data) => { return data })
      }
    })

    console.log(postFormat);



    return postFormat

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

  public async saveImagenesPost(filesImagenes: Express.Multer.File[], IdPost: number) {

    let postReceta = await this.postRecetaRepository.findOne({ where: { Id: IdPost } })

    console.log('obteniendo post');
    console.log(postReceta);

    return await this.imagenRecetasRepository.saveImagenes(filesImagenes, postReceta)

  }

  private async getImagenesByPost(post: PostRecetas) {
    let imagenes = await this.imagenRecetasRepository.findOne({ where: { PostRecetas: post } })
    console.log(imagenes);

    return new Promise((resolve, reject) => {
      let contents = fs.readFileSync(imagenes.NombreRuta, { encoding: 'base64' })
      resolve(contents)
    })
    // console.log(contents);


  }

}
