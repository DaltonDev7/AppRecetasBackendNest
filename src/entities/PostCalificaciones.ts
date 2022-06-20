import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostRecetas } from "./PostRecetas";
import { Usuario } from "./Usuario";


@Entity('post-calificaciones')
export class PostCalificaciones extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "int",
    })
    Calificacion: number

    @ManyToOne(() => PostRecetas, (postRecetas) => postRecetas.PostCalificaciones, { 

         nullable: false 
     })
     @JoinColumn({
         name: 'IdPostReceta',
     })
     PostRecetas: PostRecetas

     @ManyToOne(() => PostCalificaciones, (postCalificaciones) => postCalificaciones.Usuario, { 

        nullable: true 
    })
    @JoinColumn({
        name: 'IdUsuario',
    })
    Usuario: Usuario

}