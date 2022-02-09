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
exports.RolService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_repository_1 = require("../repositories/rol.repository");
let RolService = class RolService {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    create(rol) {
        return __awaiter(this, void 0, void 0, function* () {
            let isExist = yield this.rolRepository.findOne({
                where: { Nombre: rol.Nombre }
            });
            if (isExist)
                throw new common_1.BadRequestException('Este Rol ya esta registrado');
            let newRol = yield this.rolRepository.create(rol);
            yield this.rolRepository.save(newRol);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolRepository.find();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let rol = yield this.rolRepository.findOne({
                where: { Id: id }
            });
            console.log(rol);
            return rol;
        });
    }
};
RolService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(rol_repository_1.RolRepository)),
    __metadata("design:paramtypes", [rol_repository_1.RolRepository])
], RolService);
exports.RolService = RolService;
//# sourceMappingURL=rol.service.js.map