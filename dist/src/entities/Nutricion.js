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
exports.Nutricion = void 0;
const typeorm_1 = require("typeorm");
const PostRecetas_1 = require("./PostRecetas");
let Nutricion = class Nutricion extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Nutricion.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "decimal",
    }),
    __metadata("design:type", Number)
], Nutricion.prototype, "Calorias", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "decimal",
    }),
    __metadata("design:type", Number)
], Nutricion.prototype, "Grasas", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "decimal",
    }),
    __metadata("design:type", Number)
], Nutricion.prototype, "Azucares", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "decimal",
    }),
    __metadata("design:type", Number)
], Nutricion.prototype, "Proteinas", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "decimal",
    }),
    __metadata("design:type", Number)
], Nutricion.prototype, "Sodio", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true,
        type: "decimal",
    }),
    __metadata("design:type", Number)
], Nutricion.prototype, "Carbohidratos", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Nutricion.prototype, "FechaCreacion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", Date)
], Nutricion.prototype, "FechaModificacion", void 0);
__decorate([
    typeorm_1.OneToOne(() => PostRecetas_1.PostRecetas),
    typeorm_1.JoinColumn({
        name: 'IdPostReceta'
    }),
    __metadata("design:type", PostRecetas_1.PostRecetas)
], Nutricion.prototype, "PostRecetas", void 0);
Nutricion = __decorate([
    typeorm_1.Entity('nutricion')
], Nutricion);
exports.Nutricion = Nutricion;
//# sourceMappingURL=Nutricion.js.map