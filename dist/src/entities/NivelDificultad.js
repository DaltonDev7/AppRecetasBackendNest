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
exports.NivelDificultad = void 0;
const typeorm_1 = require("typeorm");
const PostRecetas_1 = require("./PostRecetas");
let NivelDificultad = class NivelDificultad extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], NivelDificultad.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "varchar",
        length: 25
    }),
    __metadata("design:type", String)
], NivelDificultad.prototype, "Nombre", void 0);
__decorate([
    typeorm_1.OneToMany(() => PostRecetas_1.PostRecetas, (post) => post.IdNivelDificultad),
    __metadata("design:type", Array)
], NivelDificultad.prototype, "PostRecetas", void 0);
NivelDificultad = __decorate([
    typeorm_1.Entity('nivel-dificultad')
], NivelDificultad);
exports.NivelDificultad = NivelDificultad;
//# sourceMappingURL=NivelDificultad.js.map