import { EntityRepository, Repository } from "typeorm";
import { PostCalificaciones } from "../../entities/PostCalificaciones";
import { PostRecetas } from "../../entities/PostRecetas";
import { Usuario } from "../../entities/Usuario";
import { ISaveCalificacion } from "../interfaces/save-calificacion";



@EntityRepository(PostCalificaciones)
export class CalificacionRepository extends Repository<PostCalificaciones> {

    public async saveCalificacion(payload: ISaveCalificacion, post: PostRecetas, usuario: Usuario) {

        let calificacion = new PostCalificaciones()
        calificacion.Calificacion = payload.Calificacion
        calificacion.Usuario = usuario
        calificacion.PostRecetas = post

        let dataCalificacion = await this.create(calificacion)
        await this.save(dataCalificacion)
    }

    public async updateCalificacion(payload: ISaveCalificacion, calificacion: PostCalificaciones) {
        console.log('actualizar');
        calificacion.Calificacion =  payload.Calificacion
        await this.update(calificacion.Id, calificacion)
    }

}