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
exports.RolesUsuarios = void 0;
var typeorm_1 = require("typeorm");
var Rol_1 = require("./Rol");
var Usuario_1 = require("./Usuario");
var RolesUsuarios = /** @class */ (function (_super) {
    __extends(RolesUsuarios, _super);
    function RolesUsuarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('increment'),
        __metadata("design:type", Number)
    ], RolesUsuarios.prototype, "Id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Usuario_1.Usuario; }, function (usuario) { return usuario.RolesUsuarios; }, {
            nullable: false
        }),
        typeorm_1.JoinColumn({
            name: 'IdUsuario',
        }),
        __metadata("design:type", Number)
    ], RolesUsuarios.prototype, "Usuario", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Rol_1.Rol; }, function (rol) { return rol.RolesUsuarios; }, {
            nullable: false
        }),
        typeorm_1.JoinColumn({
            name: 'IdRol',
        }),
        __metadata("design:type", Number)
    ], RolesUsuarios.prototype, "Rol", void 0);
    RolesUsuarios = __decorate([
        typeorm_1.Entity('rolesusuarios')
    ], RolesUsuarios);
    return RolesUsuarios;
}(typeorm_1.BaseEntity));
exports.RolesUsuarios = RolesUsuarios;
//# sourceMappingURL=RolesUsuarios.js.map