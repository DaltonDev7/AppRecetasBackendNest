import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator"
import { FileLogger } from "typeorm"
import { FileReference } from "typescript"
import { PostRecetaDTO } from "./post-receta-dto"


export class CreatePostRecetaDTO {

    PostReceta: PostRecetaDTO

    @IsArray()
    Ingredientes: string[]

    @IsArray()
    PasosRecetas: string[]

    @IsArray()
    Imagenes?: any[]

}