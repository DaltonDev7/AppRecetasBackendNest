"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const calificacion_repository_1 = require("../../core/repositories/calificacion.repository");
const PostRecetas_repository_1 = require("../../core/repositories/PostRecetas.repository");
const Usuario_1 = require("../../entities/Usuario");
const calificacion_controller_1 = require("./calificacion.controller");
const calificacion_service_1 = require("./services/calificacion.service");
let CalificacionModule = class CalificacionModule {
};
CalificacionModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Usuario_1.Usuario, calificacion_repository_1.CalificacionRepository, PostRecetas_repository_1.PostRecetaRepository])
        ],
        controllers: [calificacion_controller_1.CalificacionController],
        providers: [calificacion_service_1.CalificacionService]
    })
], CalificacionModule);
exports.CalificacionModule = CalificacionModule;
//# sourceMappingURL=calificacion.module.js.map