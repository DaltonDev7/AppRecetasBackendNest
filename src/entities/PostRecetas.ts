import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";


@Entity('postrecetas')
export class PostRecetas extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 25
    })
    Titulo: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    ImgPost: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    Descripcion: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    Pasos: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    Ingredientes: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    Nutricion: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    CantidadPersona: string

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

}