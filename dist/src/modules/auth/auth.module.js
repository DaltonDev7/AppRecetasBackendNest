"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
//import { PassportModule } from '@nestjs/passport';
const typeorm_1 = require("@nestjs/typeorm");
const auth_manager_service_1 = require("../../core/services/auth-manager.service");
const auth_service_1 = require("../../core/services/auth.service");
const rol_service_1 = require("../../core/services/rol.service");
const Usuario_1 = require("../../entities/Usuario");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const rol_repository_1 = require("../../core/repositories/rol.repository");
const rolesUsuarios_repository_1 = require("../../core/repositories/rolesUsuarios.repository");
const config_1 = require("@nestjs/config");
const env_constants_1 = require("../../core/constants/env.constants");
const passport_1 = require("@nestjs/passport");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        controllers: [auth_controller_1.AuthController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Usuario_1.Usuario,
                rol_repository_1.RolRepository,
                rolesUsuarios_repository_1.RolesUsuariosRepository
            ]),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt'
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        secret: configService.get(env_constants_1.JWT_SECRET),
                        signOptions: {
                            expiresIn: 7200
                        }
                    });
                }),
                inject: [config_1.ConfigService]
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            auth_manager_service_1.AuthManagerService,
            rol_service_1.RolService,
            //JwtService,
            jwt_strategy_1.JwtStrategy,
            config_1.ConfigService
        ],
        exports: [
            passport_1.PassportModule,
            //JwtService,
            jwt_strategy_1.JwtStrategy,
        ]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map