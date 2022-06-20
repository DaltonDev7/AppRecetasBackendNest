"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuario_module_1 = require("./modules/usuario/usuario.module");
const tarea_module_1 = require("./modules/tarea/tarea.module");
const ormconfig_1 = require("../ormconfig");
const auth_module_1 = require("./modules/auth/auth.module");
const rol_module_1 = require("./modules/rol/rol.module");
const post_recetas_module_1 = require("./modules/post-receta/post-recetas.module");
const calificacion_module_1 = require("./modules/calificacion/calificacion.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            usuario_module_1.UsuarioModule,
            tarea_module_1.TareaModule,
            auth_module_1.AuthModule,
            rol_module_1.RolModule,
            post_recetas_module_1.PostRecetasModule,
            calificacion_module_1.CalificacionModule
            // AppRoutingModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map