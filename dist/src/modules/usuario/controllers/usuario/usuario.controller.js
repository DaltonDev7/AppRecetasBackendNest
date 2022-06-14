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
const Jwt = require("jsonwebtoken");
const imagen_usuario_dto_1 = require("../../../../core/dto/imagen-usuario-dto");
const list_user_dto_1 = require("../../../../core/dto/list-user.dto");
const fs = require('fs');
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
    // @Get('GetById/:id')
    // async getById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    //     try {
    //         return res.status(200).json(
    //             await this.usuarioService.getById(id)
    //         )
    //     } catch (error) {
    //         return res.status(500).json({
    //             msg: 'Ha ocurrido un error',
    //             error
    //         })
    //     }
    // }
    GetUserData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.header('Authorization');
                if (!token) {
                    return res.status(401).json({
                        error: "El usuario necesita estar autenticado."
                    });
                }
                let user = Jwt.verify(token, process.env.JWT_SECRET);
                yield this.usuarioService.getById(user.Id).then((usuario) => {
                    // if (!usuario.ImagenDefecto)
                    //     contents = fs.readFileSync(usuario.ImagenPerfil, { encoding: 'base64' });
                    return res.status(200).json(Object.assign({}, usuario));
                });
                // res.sendFile(imageFormat, { root: './uploads' }
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    GetImagenUsuario(imagenUsuarioDTO, req, res) {
        let contents = fs.readFileSync(imagenUsuarioDTO.ImagenPerfil, { encoding: 'base64' });
        return res.status(200).json({
            imagen: 'data:image/png;base64,' + contents
        });
    }
    Save(user, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
    GetUsers(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.usuarioService.getUsers(data.IdUsuario).then((data) => {
                    return res.json({
                        data
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
    BuscadorUser(data, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.usuarioService.buscadorUsuarios(data).then((data) => {
                    return res.json({
                        data
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
    common_1.Get('GetUserData'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "GetUserData", null);
__decorate([
    common_1.Post('GetImagenUsuario'),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [imagen_usuario_dto_1.ImagenUsuarioDTO, Object, Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "GetImagenUsuario", null);
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
__decorate([
    common_1.Post('GetUsers'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_user_dto_1.GetListUserDTO, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "GetUsers", null);
__decorate([
    common_1.Post('BuscadorUser'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "BuscadorUser", null);
UsuarioController = __decorate([
    common_1.Controller('usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map