import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Nutricion } from "../../entities/Nutricion";
import { PostRecetas } from "../../entities/PostRecetas";
import { NutricionRepository } from "../repositories/nutricion.repository";




@Injectable()
export class NutricionService {

    constructor(
        @InjectRepository(NutricionRepository)
        private readonly nutricionRepository: NutricionRepository
    ) { }


    public async getNutricionByPost(post: PostRecetas) {
        return await this.nutricionRepository.findOne({ where: { PostRecetas: post } })
    }

    public async saveNutricion(nutricion: Nutricion, post: PostRecetas) {

    if(nutricion){

    }

       nutricion.PostRecetas = post
       let newNutricion = await this.nutricionRepository.create(nutricion)
       await this.nutricionRepository.save(newNutricion)
    }

}
