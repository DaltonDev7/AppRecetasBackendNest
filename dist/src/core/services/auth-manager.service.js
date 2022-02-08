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
exports.AuthManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcryptjs_1 = require("bcryptjs");
const typeorm_2 = require("typeorm");
const Usuario_1 = require("../../entities/Usuario");
let AuthManagerService = class AuthManagerService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    verificarCorreo(correo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersRepository.findOne({
                where: { Email: correo }
            });
        });
    }
    encriptarPassWord(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.genSalt(10);
            return yield bcryptjs_1.hash(password, salt);
        });
    }
    verificarPassword(usuario, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.compare(data.PassWord, usuario.PassWord);
            //if (!passwordVerificated) return new UnauthorizedException('Credenciales incorrectas')
        });
    }
};
AuthManagerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Usuario_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthManagerService);
exports.AuthManagerService = AuthManagerService;
//# sourceMappingURL=auth-manager.service.js.map