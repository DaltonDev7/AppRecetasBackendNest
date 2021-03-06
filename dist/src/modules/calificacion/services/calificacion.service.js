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
exports.CalificacionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const calificacion_repository_1 = require("../../../core/repositories/calificacion.repository");
const PostRecetas_repository_1 = require("../../../core/repositories/PostRecetas.repository");
const Usuario_1 = require("../../../entities/Usuario");
let CalificacionService = class CalificacionService {
    constructor(postRecetaRepository, calificacionRepository, usersRepository) {
        this.postRecetaRepository = postRecetaRepository;
        this.calificacionRepository = calificacionRepository;
        this.usersRepository = usersRepository;
    }
    save(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let post = yield this.postRecetaRepository.findOne({ where: { Id: payload.IdPost } });
            let usuario = yield this.usersRepository.findOne({ where: { Id: payload.IdUsuario } });
            let calificacion = yield this.calificacionRepository.findOne({ where: { Usuario: usuario, PostRecetas: post } });
            if (calificacion == undefined) {
                yield this.calificacionRepository.saveCalificacion(payload, post, usuario);
            }
            else {
                yield this.calificacionRepository.updateCalificacion(payload, calificacion);
            }
        });
    }
};
CalificacionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(PostRecetas_repository_1.PostRecetaRepository)),
    __param(1, typeorm_1.InjectRepository(calificacion_repository_1.CalificacionRepository)),
    __param(2, typeorm_1.InjectRepository(Usuario_1.Usuario)),
    __metadata("design:paramtypes", [PostRecetas_repository_1.PostRecetaRepository,
        calificacion_repository_1.CalificacionRepository,
        typeorm_2.Repository])
], CalificacionService);
exports.CalificacionService = CalificacionService;
//# sourceMappingURL=calificacion.service.js.map