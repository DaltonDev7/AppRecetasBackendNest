"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tarea_service_1 = require("../../core/services/tarea.service");
const Tarea_1 = require("../../entities/Tarea");
const tarea_controller_1 = require("./controllers/tarea.controller");
let TareaModule = class TareaModule {
};
TareaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Tarea_1.Tarea])
        ],
        controllers: [tarea_controller_1.TareaController],
        providers: [
            tarea_service_1.TareaService
        ]
    })
], TareaModule);
exports.TareaModule = TareaModule;
//# sourceMappingURL=tarea.module.js.map