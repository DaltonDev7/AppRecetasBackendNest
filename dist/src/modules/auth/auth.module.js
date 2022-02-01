"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var auth_manager_service_1 = require("../../core/services/auth-manager.service");
var auth_service_1 = require("../../core/services/auth.service");
var Usuario_1 = require("../../entities/Usuario");
var auth_controller_1 = require("./controllers/auth/auth.controller");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            controllers: [auth_controller_1.AuthController],
            imports: [typeorm_1.TypeOrmModule.forFeature([Usuario_1.Usuario])],
            providers: [auth_service_1.AuthService, auth_manager_service_1.AuthManagerService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map