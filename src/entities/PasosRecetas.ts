import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { PostRecetas } from "./PostRecetas";



@Entity('pasos_recetas')
export class PasosRecetas extends BaseEntity {


    @PrimaryGeneratedColumn('increment')
    Id: number;

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


    
    @ManyToOne(() => PostRecetas, (postRecetas) => postRecetas.PasosRecetas, { 
       // eager:true,
        nullable: false 
    })
    @JoinColumn({
        name: 'IdPostReceta',
    })
    PostRecetas: PostRecetas
}