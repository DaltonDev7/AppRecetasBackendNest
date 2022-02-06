import { EntityRepository, Repository } from "typeorm";
import { RolesUsuarios } from '../../entities/RolesUsuarios';


@EntityRepository(RolesUsuarios)
export class RolesUsuariosRepository extends Repository<RolesUsuarios> {
    
}