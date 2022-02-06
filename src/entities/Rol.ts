import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolesUsuarios } from "./RolesUsuarios";


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

    @OneToMany(() => RolesUsuarios, (rolUsuario) => rolUsuario.Rol)
    RolesUsuarios: RolesUsuarios[]
    

    
}