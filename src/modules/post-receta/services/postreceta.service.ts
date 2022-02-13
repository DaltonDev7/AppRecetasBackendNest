import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostRecetaDTO } from '../../../core/dto/create-postrecetas-dto';
import { PostRecetaRepository } from '../../../core/repositories/PostRecetas.repository';
import { IngredientesRecetas } from '../../../entities/IngredientesRecetas';
import { PostRecetas } from '../../../entities/PostRecetas';
import { IngredienteRepository } from '../../../core/repositories/ingrediente-receta.repository';
import { PasosRecetas } from '../../../entities/PasosRecetas';
import { PasosRecetasRepository } from '../../../core/repositories/pasos-recetas.repository';

@Injectable()
export class PostRecetaService {

    constructor(
        @InjectRepository(PostRecetaRepository)
        private readonly postRecetaRepository: PostRecetaRepository,
        @InjectRepository(IngredienteRepository)
        private readonly ingredienteRepository: IngredienteRepository,
        @InjectRepository(PasosRecetasRepository)
        private readonly PasosRecetasRepository: PasosRecetasRepository,
    ) { }

    async savePost(postReceta: CreatePostRecetaDTO) {

        let dataPost = await this.postRecetaRepository.create(postReceta.PostReceta)
        let postCreated: PostRecetas = await this.postRecetaRepository.save(dataPost)

        console.log('creado el post');
        console.log(postCreated);

        await this.ingredienteRepository.saveAllIngrediente(postReceta.Ingredientes, postCreated)
        await this.PasosRecetasRepository.saveAllPasos(postReceta.PasosRecetas, postCreated)

    }

}
