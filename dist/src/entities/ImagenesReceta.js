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
exports.ImagenesRecetas = void 0;
const typeorm_1 = require("typeorm");
const PostRecetas_1 = require("./PostRecetas");
let ImagenesRecetas = class ImagenesRecetas extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], ImagenesRecetas.prototype, "Id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => PostRecetas_1.PostRecetas, (postRecetas) => postRecetas.ImagenesRecetas, {
        //eager:true,
        nullable: false
    }),
    typeorm_1.JoinColumn({
        name: 'IdPostReceta',
    }),
    __metadata("design:type", PostRecetas_1.PostRecetas)
], ImagenesRecetas.prototype, "PostRecetas", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: 'varchar'
    }),
    __metadata("design:type", String)
], ImagenesRecetas.prototype, "NombreRuta", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], ImagenesRecetas.prototype, "FechaCreacion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", Date)
], ImagenesRecetas.prototype, "FechaModificacion", void 0);
ImagenesRecetas = __decorate([
    typeorm_1.Entity('imagenesrecetas')
], ImagenesRecetas);
exports.ImagenesRecetas = ImagenesRecetas;
//# sourceMappingURL=ImagenesReceta.js.map