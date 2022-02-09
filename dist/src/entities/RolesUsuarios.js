// import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// import { Rol } from "./Rol";
// import { Usuario } from "./Usuario";
// @Entity('rolesusuarios')
// export class RolesUsuarios extends BaseEntity {
//     @PrimaryGeneratedColumn('increment')
//     Id: number;
//     @ManyToOne(() => Usuario, (usuario) => usuario.RolesUsuarios, {
//         nullable: false
//     })
//     @JoinColumn({
//         name: 'IdUsuario',
//     })
//     Usuario: number
//     @ManyToOne(() => Rol, (rol) => rol.RolesUsuarios, {
//         nullable: false
//     })
//     @JoinColumn({
//         name: 'IdRol',
//     })
//     Rol: number
// }
//# sourceMappingURL=RolesUsuarios.js.map