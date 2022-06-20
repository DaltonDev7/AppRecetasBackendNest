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
var PostCalificaciones_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCalificaciones = void 0;
const typeorm_1 = require("typeorm");
const PostRecetas_1 = require("./PostRecetas");
const Usuario_1 = require("./Usuario");
let PostCalificaciones = PostCalificaciones_1 = class PostCalificaciones extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], PostCalificaciones.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "int",
    }),
    __metadata("design:type", Number)
], PostCalificaciones.prototype, "Calificacion", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostRecetas_1.PostRecetas, (postRecetas) => postRecetas.PostCalificaciones, {
        nullable: false
    }),
    typeorm_1.JoinColumn({
        name: 'IdPostReceta',
    }),
    __metadata("design:type", PostRecetas_1.PostRecetas)
], PostCalificaciones.prototype, "PostRecetas", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostCalificaciones_1, (postCalificaciones) => postCalificaciones.Usuario, {
        nullable: true
    }),
    typeorm_1.JoinColumn({
        name: 'IdUsuario',
    }),
    __metadata("design:type", Usuario_1.Usuario)
], PostCalificaciones.prototype, "Usuario", void 0);
PostCalificaciones = PostCalificaciones_1 = __decorate([
    typeorm_1.Entity('post-calificaciones')
], PostCalificaciones);
exports.PostCalificaciones = PostCalificaciones;
//# sourceMappingURL=PostCalificaciones.js.map