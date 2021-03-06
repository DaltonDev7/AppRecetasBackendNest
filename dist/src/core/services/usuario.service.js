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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Usuario_1 = require("../../entities/Usuario");
const user_data_dto_1 = require("../dto/user-data-dto");
const mapper_service_1 = require("../../shared/mapper/mapper.service");
const imagen_manager_service_1 = require("./imagen-manager.service");
const PostRecetas_repository_1 = require("../repositories/PostRecetas.repository");
const postreceta_service_1 = require("../../modules/post-receta/services/postreceta.service");
const fs = require('fs');
let UsuarioService = class UsuarioService {
    constructor(usersRepository, postRecetaRepository, postServices, mapperService, imagenManagerService) {
        this.usersRepository = usersRepository;
        this.postRecetaRepository = postRecetaRepository;
        this.postServices = postServices;
        this.mapperService = mapperService;
        this.imagenManagerService = imagenManagerService;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this.usersRepository.find();
            return data;
            // const data = await this.usersRepository.createQueryBuilder('user')
            //     .leftJoinAndSelect('user.Roles', 'rolesUsuario')
            //     .select([
            //         'user.Id  as  Id',
            //         'user.Nombres as Nombres',
            //         'user.Apellidos as Apellidos',
            //         'rolesUsuario.Id as IdRol',
            //         'rolesUsuario.Id as NombreRol'
            //     ])
            //     return await data.getRawMany()
            // return await this.usersRepository.find();
        });
    }
    getUserByUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let { Nombres, Apellidos, UserName, PostRecetas, Id, ImagenPerfil, ImagenDefecto } = yield this.usersRepository.findOne({ where: { UserName: userName } });
            let PostReceta = yield this.postServices.getPostByIdUser(Id);
            return {
                Id,
                Nombres,
                Apellidos,
                UserName,
                ImagenPerfil: yield this.imagenManagerService.getUsuarioImagen(Id),
                PostReceta
            };
        });
    }
    getById(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersRepository.findOne(Id);
            if (user) {
                return this.mapperService.map(user, new user_data_dto_1.UserDataDTO());
                //return this.mapperService.map<Usuario, UserDataDTO>(user, new UserDataDTO())
            }
            else {
                throw new common_1.NotFoundException('El Id del usuario no existe');
            }
        });
    }
    create(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = yield this.usersRepository.create(usuario);
            yield this.usersRepository.save(newUser);
        });
    }
    update(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersRepository.update(usuario.Id, usuario);
        });
    }
    deleteUser(Id) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.usersRepository.findOneOrFail(Id);
            if (user)
                return yield this.usersRepository.remove(user);
            else
                throw new common_1.NotFoundException('El Id del usuario no existe');
        });
    }
    getUsers(idUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(idUsuario);
            let usuarios = yield this.usersRepository.createQueryBuilder('user')
                .where('user.Id != :Id', { Id: idUsuario }).getMany();
            let dataFormat = usuarios.map((user) => __awaiter(this, void 0, void 0, function* () {
                return {
                    Id: user.Id,
                    NombreCompleto: user.Nombres + ' ' + user.Apellidos,
                    FechaCreacion: user.FechaCreacion,
                    UserName: user.UserName,
                    ImgUsuario: yield this.imagenManagerService.getUsuarioImagen(user.Id),
                    RecetasCount: yield this.countRecetasByUser(user),
                };
            }));
            let datosFinales = Promise.all(dataFormat);
            return datosFinales;
        });
    }
    buscadorUsuarios(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let usuarios = yield this.usersRepository.find({ Nombres: typeorm_2.Like(`%${data.NombreUsuario}%`) });
            let dataFormat = usuarios.map((user) => __awaiter(this, void 0, void 0, function* () {
                return {
                    Id: user.Id,
                    NombreCompleto: user.Nombres + ' ' + user.Apellidos,
                    FechaCreacion: user.FechaCreacion,
                    UserName: user.UserName,
                    ImgUsuario: yield this.imagenManagerService.getUsuarioImagen(user.Id),
                    RecetasCount: yield this.countRecetasByUser(user),
                };
            }));
            let datosFinales = Promise.all(dataFormat);
            return datosFinales;
        });
    }
    countRecetasByUser(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(usuario);
            return yield this.postRecetaRepository.count({ where: { IdUsuario: usuario } });
        });
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Usuario_1.Usuario)),
    __param(1, typeorm_1.InjectRepository(PostRecetas_repository_1.PostRecetaRepository)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        PostRecetas_repository_1.PostRecetaRepository,
        postreceta_service_1.PostRecetaService,
        mapper_service_1.MapperService,
        imagen_manager_service_1.ImagenManagerService])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map