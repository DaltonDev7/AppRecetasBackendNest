import { IsInt, IsNotEmpty, IsString } from "class-validator"


export class PostRecetaDTO {

    @IsNotEmpty()
    @IsString()
    Titulo: string

    @IsString()
    Descripcion: string

    @IsInt()
    CantidadPersona: number

    Usuario;


}