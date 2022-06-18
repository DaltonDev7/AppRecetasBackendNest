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
import { Usuario } from '../../../entities/Usuario';
import { Repository } from 'typeorm/repository/Repository';
import { ImagenManagerService } from '../../../core/services/imagen-manager.service';
import { NutricionRepository } from '../../../core/repositories/nutricion.repository';
import { NutricionService } from '../../../core/services/nutricion.service';
import { Nutricion } from '../../../entities/Nutricion';
import { PostDetailDTO } from '../../../core/dto/post-detail.dto';
const fs = require('fs');

@Injectable()
export class PostRecetaService {

  constructor(
    @InjectRepository(PostRecetaRepository)
    private readonly postRecetaRepository: PostRecetaRepository,
    @InjectRepository(NutricionRepository)
    private readonly nutricionRepository: NutricionRepository,
    @InjectRepository(IngredienteRepository)
    private readonly ingredienteRepository: IngredienteRepository,
    @InjectRepository(PasosRecetasRepository)
    private readonly PasosRecetasRepository: PasosRecetasRepository,
    @InjectRepository(ImagenRecetaRepository)
    private readonly imagenRecetasRepository: ImagenRecetaRepository,
    @InjectRepository(Usuario)
    private usersRepository: Repository<Usuario>,
    private imagenesPostService: ImagenesPostService,
    private imagenManagerService: ImagenManagerService,
    private nutricionService: NutricionService
  ) { }

  async savePost(postReceta: CreatePostRecetaDTO) {

    //creamos el post
    let dataPost = await this.postRecetaRepository.create(postReceta.PostReceta)
    let postCreated: PostRecetas = await this.postRecetaRepository.save(dataPost)

    //creamos ingredientes y los pasos
    await this.ingredienteRepository.saveAllIngrediente(postReceta.Ingredientes, postCreated)
    await this.PasosRecetasRepository.saveAllPasos(postReceta.PasosRecetas, postCreated)
    if(postReceta.Nutricion.ValorNutricional == 1) await this.nutricionService.saveNutricion(postReceta.Nutricion, postCreated)
    return postCreated;
  }

  public async getPostByIdUser(idUser: number) {

    let postsUser: PostRecetas[] = await this.postRecetaRepository.find({
      where: { IdUsuario: idUser },
      order: { FechaCreacion: 'DESC' }
    })

    let postFormat = postsUser.map(async (post: PostRecetas) => {
      return {
        Id: post.Id,
        UsuarioNombre: post.IdUsuario.Nombres,
        UsuarioApellido: post.IdUsuario.Apellidos,
        Titulo: post.Titulo,
        FechaCreacion: post.FechaCreacion,
        IdNivelDificultad: post.IdNivelDificultad?.Id,
        NivelDificultad: post.IdNivelDificultad,
        UsuarioImagen: await this.imagenManagerService.getUsuarioImagen(post.IdUsuario.Id),
        ImagenPost: await this.imagenManagerService.getImagenPortadaPost(post),
      }
    })

    let datosFinales = Promise.all(postFormat);
    return datosFinales
    //   console.log(postFormat);



    // return postFormat

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
    return await this.imagenRecetasRepository.saveImagenes(filesImagenes, postReceta)
  }

  public async getPostById(idPost: number): Promise<PostDetailDTO> {
    let post: PostRecetas = await this.postRecetaRepository.findOne({ where: { Id: idPost } })

    let dataFormat = {
      Id: post.Id,
      Descripcion: post.Descripcion,
      Titulo: post.Titulo,
      UsuarioNombre: post.IdUsuario.Nombres,
      UsuarioApellido: post.IdUsuario.Apellidos,
      FechaCreacion: post.FechaCreacion,
      NivelDificultad: post.IdNivelDificultad,
      PasosRecetas: post.PasosRecetas,
      Ingredientes: post.IngredientesRecetas,
      CantidadPersona: post.CantidadPersona,
      UsuarioImagen: await this.imagenManagerService.getUsuarioImagen(post.IdUsuario.Id),
      ImagenesPost: await this.imagenManagerService.getImagenesByPost(post),
      Nutricion: await this.nutricionService.getNutricionByPost(post)
    }

    //  let datosFinales = Promise.all(dataFormat);
    return dataFormat
  }

  public async getNutricionByPost(post: PostRecetas) {
    return
  }



}
