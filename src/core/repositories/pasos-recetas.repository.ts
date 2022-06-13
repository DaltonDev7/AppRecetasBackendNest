import { EntityRepository, Repository } from 'typeorm';
import { PasosRecetas } from '../../entities/PasosRecetas';
import { PostRecetas } from '../../entities/PostRecetas';



@EntityRepository(PasosRecetas)
export class PasosRecetasRepository extends Repository<PasosRecetas> {

    async saveAllPasos(pasos: string[], post: PostRecetas) {

        pasos.forEach(async (item) => {

            let pasosReceta = new PasosRecetas()
            pasosReceta.PostRecetas = post
            pasosReceta.Descripcion = item

            let newPaso = await this.create(pasosReceta)
            await this.save(newPaso)

        })

    }

}