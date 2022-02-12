import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { PostRecetas } from "./PostRecetas";



@Entity('pasos_recetas')
export class ImagenesRecetas extends BaseEntity {


    @PrimaryGeneratedColumn('increment')
    Id: number;


    PostRecetas: PostRecetas

    @Column({
        nullable: false,
        type: 'varchar'
    })
    Descripcion: string;

    @Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    })
    FechaCreacion: Date;

    @Column({
        nullable: true
    })
    FechaModificacion: Date;
}