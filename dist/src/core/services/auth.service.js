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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Usuario_1 = require("../../entities/Usuario");
const auth_manager_service_1 = require("./auth-manager.service");
const rol_service_1 = require("./rol.service");
const perfil_enums_1 = require("../enums/perfil.enums");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersRepository, rolService, 
    // @InjectRepository(RolRepository)
    // private rolRepository: RolRepository,
    authManagerService, jwtService) {
        this.usersRepository = usersRepository;
        this.rolService = rolService;
        this.authManagerService = authManagerService;
        this.jwtService = jwtService;
    }
    registrarUser(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(usuario);
            let existCorreo = yield this.authManagerService.verificarCorreo(usuario.Email);
            if (existCorreo)
                throw new common_1.BadRequestException('Este correo ya esta registrado');
            let existUserName = yield this.usersRepository.findOne({ where: { UserName: usuario.UserName } });
            if (existUserName)
                throw new common_1.BadRequestException('El Username ya esta registrado');
            let passWordEncriptado = yield this.authManagerService.encriptarPassWord(usuario.PassWord);
            usuario.PassWord = passWordEncriptado;
            let newUser = yield this.usersRepository.create(usuario);
            let rolUser = yield this.rolService.getById(perfil_enums_1.PerfilEnum.USUARIO);
            newUser.Roles = [rolUser];
            yield this.usersRepository.save(newUser);
        });
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.usersRepository.findOne({ where: { Email: payload.Email } });
            if (!usuario)
                return new common_1.UnauthorizedException('Este correo no esta registrado');
            let passwordVerificated = this.authManagerService.verificarPassword(payload, usuario);
            if (!passwordVerificated)
                return new common_1.UnauthorizedException('Credenciales incorrectas');
            const userPayload = {
                Id: usuario.Id,
                Email: usuario.Email
            };
            let token = yield this.jwtService.sign(userPayload);
            return { token };
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Usuario_1.Usuario)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        rol_service_1.RolService,
        auth_manager_service_1.AuthManagerService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map