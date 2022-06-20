import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PasosRecetas } from "./PasosRecetas";
import { Usuario } from "./Usuario";
import { ImagenesRecetas } from './ImagenesReceta';
import { IngredientesRecetas } from './IngredientesRecetas';
import { Nutricion } from './Nutricion';
import { NivelDificultad } from "./NivelDificultad";
import { PostCalificaciones } from "./PostCalificaciones";


@Entity('postrecetas')
export class PostRecetas extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 100
    })
    Titulo: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    Descripcion: string

    @Column({
        nullable: true,
    })
    CantidadPersona: number

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





    @ManyToOne(() => Usuario, (usuario) => usuario.PostRecetas, { 
        eager:true,
        nullable: false 
    })
    @JoinColumn({
        name: 'IdUsuario',
    })
    IdUsuario: Usuario

    @ManyToOne(() => NivelDificultad, (nivel) => nivel.PostRecetas, {
         eager:true,
        nullable: true
    })
    @JoinColumn({
        name: 'IdNivelDificultad',
    })
    IdNivelDificultad: NivelDificultad



    @OneToMany(() => PasosRecetas, (PasosRecetas) => PasosRecetas.PostRecetas, {eager :true})
    PasosRecetas: PasosRecetas[]

    @OneToMany(() => ImagenesRecetas, (imagen) => imagen.PostRecetas)
    ImagenesRecetas: ImagenesRecetas[]

    @OneToMany(() => IngredientesRecetas, (ingrediente) => ingrediente.PostRecetas, {eager :true})
    IngredientesRecetas: IngredientesRecetas[]

    @OneToOne(()=>  Nutricion, (nutricion) => nutricion.PostRecetas)
    Nutricion : Nutricion

    @OneToMany(() => PostCalificaciones, (calificacion) => calificacion.PostRecetas, {eager :true})
    PostCalificaciones: PostCalificaciones[]

}