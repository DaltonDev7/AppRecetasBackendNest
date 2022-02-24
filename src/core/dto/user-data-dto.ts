import { StreamableFile } from "@nestjs/common";
import { ReadStream } from "typeorm/platform/PlatformTools";
import { Rol } from "../../entities/Rol";



export class UserDataDTO {

    Id: number;
    Nombres: string
    UserName: string
    ImagenPerfil: string
    ImagenDefecto:boolean
    File?: any
    Email: string
    Apellidos: string
    Roles: Rol[]
}