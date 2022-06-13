// import { Injectable } from '@nestjs/common';
// import { TypeMapper } from 'ts-mapper';
// import { Usuario } from '../../entities/Usuario';
// import { UserDataDTO } from '../dto/user-data-dto';

// @Injectable()
// export class MapperServices  extends TypeMapper {

//     constructor(){
//         super()
//         this.usuarioMapper()
//     }

//     public usuarioMapper(){
//         this.createMap<Usuario, UserDataDTO>()
//         .map(entity => entity.Id , dto => dto.Id)
//         .map(entity => entity.Nombres , dto => dto.Nombres)
//         .map(entity => entity.Apellidos , dto => dto.Apellidos)
//         .map(entity => entity.Email , dto => dto.Email)
//         .map(entity => entity.UserName , dto => dto.UserName)
//         .map(entity => entity.ImagenPerfil , dto => dto.ImagenPerfil)
//         .map(entity => entity.Roles , dto => dto.Roles)
//     } 

// }   
