import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

import { Usuario } from './Usuario';


@Entity('rol')
export class Rol extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 25
    })
    Nombre: string

    @ManyToMany(() => Usuario, (usuario) => usuario.Roles)
    Usuarios: Usuario[]
    

    
}