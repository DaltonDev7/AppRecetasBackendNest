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
exports.UsuarioController = void 0;
const common_1 = require("@nestjs/common");
const usuario_service_1 = require("../../../../core/services/usuario.service");
const Usuario_1 = require("../../../../entities/Usuario");
let UsuarioController = class UsuarioController {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entroo');
                return res.status(200).json(yield this.usuarioService.getAll());
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    getById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json(yield this.usuarioService.getById(id));
            }
            catch (error) {
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    Save(user, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(user);
                yield this.usuarioService.create(user).then(() => {
                    return res.status(201).json({
                        msg: 'Usuario Creado'
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
    Update(user, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(user);
                yield this.usuarioService.update(user).then((data) => {
                    return res.json({
                        data,
                        msg: 'Usuario Actualizado'
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
    Delete(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.usuarioService.deleteUser(id).then(() => {
                    return res.json({
                        msg: 'Usuario Eliminado'
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
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getUsers", null);
__decorate([
    common_1.Get('GetById/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "getById", null);
__decorate([
    common_1.Post('Save'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario_1.Usuario, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "Save", null);
__decorate([
    common_1.Put('Update'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Usuario_1.Usuario, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "Update", null);
__decorate([
    common_1.Delete('Delete/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "Delete", null);
UsuarioController = __decorate([
    common_1.Controller('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map