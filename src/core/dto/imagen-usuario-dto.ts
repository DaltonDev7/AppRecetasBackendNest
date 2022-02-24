import { IsNotEmpty, IsString } from "class-validator";

export class ImagenUsuarioDTO{

    @IsString()
    @IsNotEmpty()
    ImagenPerfil:string
}