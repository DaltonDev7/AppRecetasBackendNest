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
exports.PasosRecetas = void 0;
const typeorm_1 = require("typeorm");
const PostRecetas_1 = require("./PostRecetas");
let PasosRecetas = class PasosRecetas extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], PasosRecetas.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: 'varchar'
    }),
    __metadata("design:type", String)
], PasosRecetas.prototype, "Descripcion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], PasosRecetas.prototype, "FechaCreacion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", Date)
], PasosRecetas.prototype, "FechaModificacion", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostRecetas_1.PostRecetas, (postRecetas) => postRecetas.PasosRecetas, {
        // eager:true,
        nullable: false
    }),
    typeorm_1.JoinColumn({
        name: 'IdPostReceta',
    }),
    __metadata("design:type", PostRecetas_1.PostRecetas)
], PasosRecetas.prototype, "PostRecetas", void 0);
PasosRecetas = __decorate([
    typeorm_1.Entity('pasos_recetas')
], PasosRecetas);
exports.PasosRecetas = PasosRecetas;
//# sourceMappingURL=PasosRecetas.js.map