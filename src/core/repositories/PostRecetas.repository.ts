import { EntityRepository, Repository } from "typeorm";
import { PostRecetas } from "../../entities/PostRecetas";


@EntityRepository(PostRecetas)
export class PostRecetaRepository extends Repository<PostRecetas> {
    
}