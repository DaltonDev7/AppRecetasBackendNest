import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PasosRecetas } from "./PasosRecetas";
import { Usuario } from "./Usuario";
import { ImagenesRecetas } from './ImagenesReceta';
import { IngredientesRecetas } from './IngredientesRecetas';
import { Nutricion } from './Nutricion';


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
        //eager:true,
        nullable: false 
    })
    @JoinColumn({
        name: 'IdUsuario',
    })
    Usuario: Usuario

    @OneToMany(() => PasosRecetas, (PasosRecetas) => PasosRecetas.PostRecetas)
    PasosRecetas: PasosRecetas[]

    @OneToMany(() => ImagenesRecetas, (imagen) => imagen.PostRecetas)
    ImagenesRecetas: ImagenesRecetas[]

    @OneToMany(() => IngredientesRecetas, (ingrediente) => ingrediente.PostRecetas)
    IngredientesRecetas: IngredientesRecetas[]

    @OneToOne(()=>  Nutricion, (nutricion) => nutricion.PostRecetas)
    Nutricion : Nutricion
}