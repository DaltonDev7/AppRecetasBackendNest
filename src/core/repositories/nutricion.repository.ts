import { EntityRepository, Repository } from "typeorm";
import { Nutricion } from "../../entities/Nutricion";




@EntityRepository(Nutricion)
export class NutricionRepository extends Repository<Nutricion> {
    

    

}