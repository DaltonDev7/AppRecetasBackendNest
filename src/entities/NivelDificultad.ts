import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostRecetas } from './PostRecetas';



@Entity('nivel-dificultad')
export class NivelDificultad extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 25
    })
    Nombre: string

    @OneToMany(() => PostRecetas, (post) => post.IdNivelDificultad)
    PostRecetas: PostRecetas[]

}