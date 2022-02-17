import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./Rol";
import { Tarea } from "./Tarea";
import { PostRecetas } from './PostRecetas';
import { Sexo } from "./Sexo";


@Entity('usuarios')
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    Id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 25
    })
    Nombres: string

    @Column({
        nullable: false,
        type: "varchar",
        unique: true,
        length: 50
    })
    UserName: string

    @Column({
        nullable: false,
        type: "varchar",
    })
    ImagenPerfil: string

    @Column({
        nullable: true,
        type: "varchar",
        unique: true,
        length: 50
    })
    Email: string

    @Column({
        nullable: true,
        type: "varchar",
    })
    PassWord: string

    @Column({
        nullable: false,
        type: "varchar",
        length: 25
    })
    Apellidos: string

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


    @OneToMany(() => Tarea, (tarea) => tarea.Usuario)
    Tareas: Tarea[]


    @ManyToOne(() => Sexo, (sexo) => sexo.Usuarios, { 
        // eager:true,
         nullable: false 
     })
     @JoinColumn({
         name: 'IdSexo',
     })
     IdSexo: Sexo


    @OneToMany(() => PostRecetas, (postRecetas) => postRecetas.Usuario)
    PostRecetas: PostRecetas[]

    @ManyToMany(() => Rol, (rol) => rol.Usuarios)
    @JoinTable({
        name: 'usuarios_roles',
        joinColumn: { name: 'IdUsuario' },
        inverseJoinColumn: { name: 'IdRol' }
    })
    Roles: Rol[]


}
