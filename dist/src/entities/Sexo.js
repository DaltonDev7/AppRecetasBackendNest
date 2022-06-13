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
exports.Sexo = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
let Sexo = class Sexo extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Sexo.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "varchar",
        length: 25
    }),
    __metadata("design:type", String)
], Sexo.prototype, "Nombre", void 0);
__decorate([
    typeorm_1.OneToMany(() => Usuario_1.Usuario, (usuario) => usuario.IdSexo),
    __metadata("design:type", Array)
], Sexo.prototype, "Usuarios", void 0);
Sexo = __decorate([
    typeorm_1.Entity('sexo')
], Sexo);
exports.Sexo = Sexo;
//# sourceMappingURL=Sexo.js.map