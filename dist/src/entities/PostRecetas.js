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
exports.PostRecetas = void 0;
const typeorm_1 = require("typeorm");
const PasosRecetas_1 = require("./PasosRecetas");
const Usuario_1 = require("./Usuario");
const ImagenesReceta_1 = require("./ImagenesReceta");
const IngredientesRecetas_1 = require("./IngredientesRecetas");
const Nutricion_1 = require("./Nutricion");
let PostRecetas = class PostRecetas extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], PostRecetas.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "varchar",
        length: 25
    }),
    __metadata("design:type", String)
], PostRecetas.prototype, "Titulo", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
    }),
    __metadata("design:type", String)
], PostRecetas.prototype, "ImgPost", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
    }),
    __metadata("design:type", String)
], PostRecetas.prototype, "Descripcion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
    }),
    __metadata("design:type", String)
], PostRecetas.prototype, "Pasos", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
    }),
    __metadata("design:type", String)
], PostRecetas.prototype, "Ingredientes", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "varchar",
    }),
    __metadata("design:type", String)
], PostRecetas.prototype, "CantidadPersona", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], PostRecetas.prototype, "FechaCreacion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", Date)
], PostRecetas.prototype, "FechaModificacion", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Usuario_1.Usuario, (usuario) => usuario.PostRecetas, {
        //eager:true,
        nullable: false
    }),
    typeorm_1.JoinColumn({
        name: 'IdUsuario',
    }),
    __metadata("design:type", Usuario_1.Usuario)
], PostRecetas.prototype, "Usuario", void 0);
__decorate([
    typeorm_1.OneToMany(() => PasosRecetas_1.PasosRecetas, (PasosRecetas) => PasosRecetas.PostRecetas),
    __metadata("design:type", Array)
], PostRecetas.prototype, "PasosRecetas", void 0);
__decorate([
    typeorm_1.OneToMany(() => ImagenesReceta_1.ImagenesRecetas, (imagen) => imagen.PostRecetas),
    __metadata("design:type", Array)
], PostRecetas.prototype, "ImagenesRecetas", void 0);
__decorate([
    typeorm_1.OneToMany(() => IngredientesRecetas_1.IngredientesRecetas, (ingrediente) => ingrediente.PostRecetas),
    __metadata("design:type", Array)
], PostRecetas.prototype, "IngredientesRecetas", void 0);
__decorate([
    typeorm_1.OneToOne(() => Nutricion_1.Nutricion, (nutricion) => nutricion.PostRecetas),
    __metadata("design:type", Nutricion_1.Nutricion)
], PostRecetas.prototype, "Nutricion", void 0);
PostRecetas = __decorate([
    typeorm_1.Entity('postrecetas')
], PostRecetas);
exports.PostRecetas = PostRecetas;
//# sourceMappingURL=PostRecetas.js.map