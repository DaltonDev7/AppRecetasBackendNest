"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const Rol_1 = require("./Rol");
const Tarea_1 = require("./Tarea");
const PostRecetas_1 = require("./PostRecetas");
const Sexo_1 = require("./Sexo");
let Usuario = class Usuario extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Usuario.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "varchar",
        length: 25
    }),
    __metadata("design:type", String)
], Usuario.prototype, "Nombres", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "varchar",
        unique: true,
        length: 50
    }),
    __metadata("design:type", String)
], Usuario.prototype, "UserName", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
        unique: true,
        length: 50
    }),
    __metadata("design:type", String)
], Usuario.prototype, "Email", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
    }),
    __metadata("design:type", String)
], Usuario.prototype, "PassWord", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "varchar",
        length: 25
    }),
    __metadata("design:type", String)
], Usuario.prototype, "Apellidos", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Usuario.prototype, "FechaCreacion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", Date)
], Usuario.prototype, "FechaModificacion", void 0);
__decorate([
    typeorm_1.OneToMany(() => Tarea_1.Tarea, (tarea) => tarea.Usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "Tareas", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Sexo_1.Sexo, (sexo) => sexo.Usuarios, {
        // eager:true,
        nullable: false
    }),
    typeorm_1.JoinColumn({
        name: 'IdSexo',
    }),
    __metadata("design:type", Sexo_1.Sexo)
], Usuario.prototype, "Sexo", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostRecetas_1.PostRecetas, (postRecetas) => postRecetas.Usuario),
    __metadata("design:type", Array)
], Usuario.prototype, "PostRecetas", void 0);
__decorate([
    typeorm_1.ManyToMany(() => Rol_1.Rol, (rol) => rol.Usuarios),
    typeorm_1.JoinTable({
        name: 'usuarios_roles',
        joinColumn: { name: 'IdUsuario' },
        inverseJoinColumn: { name: 'IdRol' }
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "Roles", void 0);
Usuario = __decorate([
    typeorm_1.Entity('usuarios')
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=Usuario.js.map