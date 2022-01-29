import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarea } from "./Tarea";


@Entity('usuarios')
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length:25
    })
    Nombres:string

    @Column({
        nullable: false,
        type: "varchar",
        length:25
    })
    Apellidos:string

    @Column({
        nullable: false,
        type: "timestamp",
    })
    FechaCreacion: Date;

    @Column({
        nullable: true
    })
    FechaModificacion: Date;

    @OneToMany(()=> Tarea, (tarea)=> tarea.Usuario)
    Tareas:Tarea[]

}
