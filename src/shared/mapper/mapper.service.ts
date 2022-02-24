import { Injectable } from "@nestjs/common";
import { TypeMapper } from "ts-mapper";
import { UserDataDTO } from "../../core/dto/user-data-dto";
import { Usuario } from "../../entities/Usuario";


@Injectable()
export class MapperService extends TypeMapper {

    constructor(){
        super()
        this.usuarioMapper()
    }

    public usuarioMapper(){
        this.createMap<Usuario, UserDataDTO>()
        .map(entity => entity.Id , dto => dto.Id)
        .map(entity => entity.Nombres , dto => dto.Nombres)
        .map(entity => entity.Apellidos , dto => dto.Apellidos)
        .map(entity => entity.Email , dto => dto.Email)
        .map(entity => entity.UserName , dto => dto.UserName)
        .map(entity => entity.ImagenPerfil , dto => dto.ImagenPerfil)
        .map(entity => entity.ImagenDefecto , dto => dto.ImagenDefecto)
        .map(entity => entity.Roles , dto => dto.Roles)
    } 

}