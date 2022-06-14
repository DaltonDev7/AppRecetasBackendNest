import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ImagenesRecetas } from "../../entities/ImagenesReceta";
import { PostRecetas } from "../../entities/PostRecetas";
import { Usuario } from "../../entities/Usuario";
import { ImagenRecetaRepository } from "../repositories/imagen-receta.repository";
const fs = require('fs');

@Injectable()
export class ImagenManagerService {
    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
        @InjectRepository(ImagenRecetaRepository)
        private readonly imagenRecetasRepository: ImagenRecetaRepository,
    ) { }


    public async getUsuarioImagen(usuario: Usuario) {
        let userData = await this.usersRepository.findOne({ where: { Id: usuario.Id } })
        if (userData.ImagenDefecto) {
            return `assets/images/profile-default/${userData.ImagenPerfil}`
        } else {
            return 'data:image/png;base64,' + fs.readFileSync(userData.ImagenPerfil, { encoding: 'base64' })
        }
    }

    public async getImagenesByPost(post: PostRecetas) {
        let imagenes: ImagenesRecetas[] = await this.imagenRecetasRepository.find({ where: { PostRecetas: post }, order: { FechaCreacion: 'ASC' } })
    
        console.log('imagens del  post ' + post.Titulo);
        console.log(imagenes);
        console.log(imagenes[0].Id);
        console.log(imagenes[0].NombreRuta);
    
    
        let content = 'data:image/png;base64,' + fs.readFileSync(imagenes[0].NombreRuta, { encoding: 'base64' })
        return await content
      }


}

