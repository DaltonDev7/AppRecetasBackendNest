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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
var common_1 = require("@nestjs/common");
var usuario_service_1 = require("../../../../core/services/usuario.service");
var Usuario_1 = require("../../../../entities/Usuario");
var UsuarioController = /** @class */ (function () {
    function UsuarioController(usuarioService) {
        this.usuarioService = usuarioService;
    }
    UsuarioController.prototype.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        console.log('entroo');
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, this.usuarioService.getAll()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_1 = _c.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_1
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.getById = function (id, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, this.usuarioService.getById(id)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        error_2 = _c.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_2
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.Save = function (user, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(user);
                        return [4 /*yield*/, this.usuarioService.create(user).then(function () {
                                return res.status(201).json({
                                    msg: 'Usuario Creado'
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_3
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.Update = function (user, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(user);
                        return [4 /*yield*/, this.usuarioService.update(user).then(function (data) {
                                return res.json({
                                    data: data,
                                    msg: 'Usuario Actualizado'
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_4
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsuarioController.prototype.Delete = function (id, res) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usuarioService.deleteUser(id).then(function () {
                                return res.json({
                                    msg: 'Usuario Eliminado'
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(500).json({
                                msg: 'Ha ocurrido un error',
                                error: error_5
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
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
    return UsuarioController;
}());
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map