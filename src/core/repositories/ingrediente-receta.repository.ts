import { EntityRepository, Repository } from "typeorm";
import { IngredientesRecetas } from '../../entities/IngredientesRecetas';
import { PostRecetas } from '../../entities/PostRecetas';



@EntityRepository(IngredientesRecetas)
export class IngredienteRepository extends Repository<IngredientesRecetas> {


    async saveAllIngrediente(ingredientes: string[], postReceta: PostRecetas) {

        ingredientes.forEach(async (item) => {

            let ingrediente = new IngredientesRecetas()
            ingrediente.PostRecetas = postReceta
            ingrediente.Descripcion = item

            let dataIngrediente = await this.create(ingrediente)
            await this.save(dataIngrediente)

        })

    }

}