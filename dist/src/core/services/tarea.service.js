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
exports.TareaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Tarea_1 = require("../../entities/Tarea");
let TareaService = class TareaService {
    constructor(tareaRepository) {
        this.tareaRepository = tareaRepository;
    }
    save(tarea) {
        return __awaiter(this, void 0, void 0, function* () {
            let newTarea = yield this.tareaRepository.create(tarea);
            return this.tareaRepository.save(newTarea);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tareaRepository.createQueryBuilder('tarea')
                .leftJoinAndSelect('tarea.Usuario', 'usuario')
                .select([
                'tarea.Id as Id',
                'tarea.Descripcion as Descripcion',
                'tarea.FechaCreacion as FechaCreacion',
                'usuario.Id as IdUsuario',
                'usuario.Nombres as NombreUsuario',
                'usuario.Apellidos as ApellidoUsuario'
            ]);
            return yield data.getRawMany();
        });
    }
    getTareaByIdUsuario(idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.tareaRepository.createQueryBuilder('tarea')
                .leftJoinAndSelect('tarea.Usuario', 'usuario')
                .where('usuario.Id = :Id', { Id: idUsuario })
                .select([
                'tarea.Descripcion as Descripcion',
                'tarea.FechaCreacion as FechaCreacion',
                'usuario.Id as IdUsuario',
                'usuario.Nombres as NombreUsuario',
                'usuario.Apellidos as ApellidoUsuario'
            ]);
            return yield data.getRawMany();
        });
    }
    delete(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            let tarea = yield this.tareaRepository.findOne(Id);
            if (tarea != undefined)
                return this.tareaRepository.remove(tarea);
            else
                throw new common_1.NotFoundException('El Id de la tarea no existe');
        });
    }
};
TareaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Tarea_1.Tarea)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TareaService);
exports.TareaService = TareaService;
//# sourceMappingURL=tarea.service.js.map