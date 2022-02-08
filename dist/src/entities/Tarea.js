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
exports.Tarea = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
let Tarea = class Tarea extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], Tarea.prototype, "Id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        length: 258,
        type: "varchar"
    }),
    __metadata("design:type", String)
], Tarea.prototype, "Descripcion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: "timestamp",
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Tarea.prototype, "FechaCreacion", void 0);
__decorate([
    typeorm_1.Column({
        nullable: true
    }),
    __metadata("design:type", Date)
], Tarea.prototype, "FechaModificacion", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Usuario_1.Usuario, (usuario) => usuario.Tareas, {
        //eager:true,
        nullable: false
    }),
    typeorm_1.JoinColumn({
        name: 'IdUsuario',
    }),
    __metadata("design:type", Usuario_1.Usuario)
], Tarea.prototype, "Usuario", void 0);
Tarea = __decorate([
    typeorm_1.Entity('tareas')
], Tarea);
exports.Tarea = Tarea;
//# sourceMappingURL=Tarea.js.map