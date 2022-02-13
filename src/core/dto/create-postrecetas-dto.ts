import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator"
import { PostRecetaDTO } from "./post-receta-dto"


export class CreatePostRecetaDTO {

    PostReceta: PostRecetaDTO
    
    @IsArray()
    Ingredientes: string[]

    @IsArray()
    PasosRecetas: string[]

}