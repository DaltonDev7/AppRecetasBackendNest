"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var tarea_module_1 = require("./modules/tarea/tarea.module");
var usuario_module_1 = require("./modules/usuario/usuario.module");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        common_1.Module({
            imports: [
                core_1.RouterModule.register([
                    {
                        path: 'Usuario',
                        module: usuario_module_1.UsuarioModule
                    },
                    {
                        path: 'Tarea',
                        module: tarea_module_1.TareaModule
                    }
                ])
            ],
            exports: [
                core_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map