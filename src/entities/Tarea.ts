import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity('tareas')
export class Tarea extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        length: 258,
        type: "varchar"
    })
    Descripcion: string

    @Column({
        nullable: false,
        type: "timestamp",
    })
    FechaCreacion: Date;

    @Column({
        nullable: true
    })
    FechaModificacion: Date;

    @ManyToOne(() => Usuario, (usuario) => usuario.Tareas)
    @JoinColumn({
        name: 'IdUsuario'
    })
    Usuario: Usuario

}
