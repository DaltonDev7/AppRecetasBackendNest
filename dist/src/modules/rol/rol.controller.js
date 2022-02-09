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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolController = void 0;
const common_1 = require("@nestjs/common");
const rol_service_1 = require("../../core/services/rol.service");
const Rol_1 = require("../../entities/Rol");
let RolController = class RolController {
    constructor(rolService) {
        this.rolService = rolService;
    }
    GetAll(res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json(yield this.rolService.getAll());
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    GetById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json(yield this.rolService.getById(id));
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    Save(rol, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.rolService.create(rol).then(() => {
                    return res.status(201).json({
                        msg: 'Rol Creado'
                    });
                });
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
};
__decorate([
    common_1.Get('GetAll'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "GetAll", null);
__decorate([
    common_1.Get('GetById/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "GetById", null);
__decorate([
    common_1.Post('Save'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Rol_1.Rol, Object]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "Save", null);
RolController = __decorate([
    common_1.Controller('rol'),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolController);
exports.RolController = RolController;
//# sourceMappingURL=rol.controller.js.map