import { EntityRepository, Repository } from 'typeorm';
import { Rol } from '../../entities/Rol';


@EntityRepository(Rol)
export class RolRepository extends Repository<Rol> {
    
}