import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";



@Entity('sexo')
export class Sexo extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 25
    })
    Nombre: string

    @OneToMany(() => Usuario, (usuario) => usuario.IdSexo)
    Usuarios: Usuario[]
    

    
}