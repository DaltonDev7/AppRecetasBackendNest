"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var typeorm_1 = require("typeorm");
var Usuario_1 = require("./Usuario");
var Tarea = /** @class */ (function (_super) {
    __extends(Tarea, _super);
    function Tarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
            default: function () { return 'CURRENT_TIMESTAMP'; }
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
        typeorm_1.ManyToOne(function () { return Usuario_1.Usuario; }, function (usuario) { return usuario.Tareas; }, {
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
    return Tarea;
}(typeorm_1.BaseEntity));
exports.Tarea = Tarea;
//# sourceMappingURL=Tarea.js.map