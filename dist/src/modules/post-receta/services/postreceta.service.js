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
exports.PostRecetaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PostRecetas_repository_1 = require("../../../core/repositories/PostRecetas.repository");
const ingrediente_receta_repository_1 = require("../../../core/repositories/ingrediente-receta.repository");
const pasos_recetas_repository_1 = require("../../../core/repositories/pasos-recetas.repository");
const imagen_receta_repository_1 = require("../../../core/repositories/imagen-receta.repository");
const imagenes_post_service_1 = require("./imagenes-post.service");
const Usuario_1 = require("../../../entities/Usuario");
const Repository_1 = require("typeorm/repository/Repository");
const imagen_manager_service_1 = require("../../../core/services/imagen-manager.service");
const nutricion_repository_1 = require("../../../core/repositories/nutricion.repository");
const nutricion_service_1 = require("../../../core/services/nutricion.service");
const fs = require('fs');
let PostRecetaService = class PostRecetaService {
    constructor(postRecetaRepository, nutricionRepository, ingredienteRepository, PasosRecetasRepository, imagenRecetasRepository, usersRepository, imagenesPostService, imagenManagerService, nutricionService) {
        this.postRecetaRepository = postRecetaRepository;
        this.nutricionRepository = nutricionRepository;
        this.ingredienteRepository = ingredienteRepository;
        this.PasosRecetasRepository = PasosRecetasRepository;
        this.imagenRecetasRepository = imagenRecetasRepository;
        this.usersRepository = usersRepository;
        this.imagenesPostService = imagenesPostService;
        this.imagenManagerService = imagenManagerService;
        this.nutricionService = nutricionService;
    }
    savePost(postReceta) {
        return __awaiter(this, void 0, void 0, function* () {
            //creamos el post
            let dataPost = yield this.postRecetaRepository.create(postReceta.PostReceta);
            let postCreated = yield this.postRecetaRepository.save(dataPost);
            //creamos ingredientes y los pasos
            yield this.ingredienteRepository.saveAllIngrediente(postReceta.Ingredientes, postCreated);
            yield this.PasosRecetasRepository.saveAllPasos(postReceta.PasosRecetas, postCreated);
            if (postReceta.Nutricion.ValorNutricional == 1)
                yield this.nutricionService.saveNutricion(postReceta.Nutricion, postCreated);
            return postCreated;
        });
    }
    getPostByIdUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            let postsUser = yield this.postRecetaRepository.find({
                where: { IdUsuario: idUser },
                order: { FechaCreacion: 'DESC' }
            });
            let postFormat = postsUser.map((post) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                return {
                    Id: post.Id,
                    UsuarioNombre: post.IdUsuario.Nombres,
                    UsuarioApellido: post.IdUsuario.Apellidos,
                    Titulo: post.Titulo,
                    FechaCreacion: post.FechaCreacion,
                    IdNivelDificultad: (_a = post.IdNivelDificultad) === null || _a === void 0 ? void 0 : _a.Id,
                    NivelDificultad: post.IdNivelDificultad,
                    UsuarioImagen: yield this.imagenManagerService.getUsuarioImagen(post.IdUsuario.Id),
                    ImagenPost: yield this.imagenManagerService.getImagenPortadaPost(post),
                };
            }));
            let datosFinales = Promise.all(postFormat);
            return datosFinales;
            //   console.log(postFormat);
            // return postFormat
            //  return await data.get
            // return await this.postRecetaRepository.createQueryBuilder('post')
            // .leftJoinAndSelect('post.Usuario', 'usuario')
            // .where('usuario.Id = :Id', { Id: idUser })
            //     .select([
            //         'post.Id as Id',
            //         'post.Titulo as Descripcion',
            //         'post.Descripcion as Descripcion',
            //         'post.CantidadPersona as CantidadPersona',
            //         'post.FechaCreacion as FechaCreacion',
            //         'usuario.Id as IdUsuario',
            //         'usuario.Nombres as NombreUsuario',
            //         'usuario.Apellidos as ApellidoUsuario'
            //     ]).getRawMany()
        });
    }
    saveImagenesPost(filesImagenes, IdPost) {
        return __awaiter(this, void 0, void 0, function* () {
            let postReceta = yield this.postRecetaRepository.findOne({ where: { Id: IdPost } });
            return yield this.imagenRecetasRepository.saveImagenes(filesImagenes, postReceta);
        });
    }
    getPostById(idPost) {
        return __awaiter(this, void 0, void 0, function* () {
            let post = yield this.postRecetaRepository.findOne({ where: { Id: idPost } });
            let dataFormat = {
                Id: post.Id,
                Descripcion: post.Descripcion,
                Titulo: post.Titulo,
                UsuarioNombre: post.IdUsuario.Nombres,
                UsuarioApellido: post.IdUsuario.Apellidos,
                FechaCreacion: post.FechaCreacion,
                NivelDificultad: post.IdNivelDificultad,
                PasosRecetas: post.PasosRecetas,
                Ingredientes: post.IngredientesRecetas,
                CantidadPersona: post.CantidadPersona,
                UsuarioImagen: yield this.imagenManagerService.getUsuarioImagen(post.IdUsuario.Id),
                ImagenesPost: yield this.imagenManagerService.getImagenesByPost(post),
                Nutricion: yield this.nutricionService.getNutricionByPost(post)
            };
            //  let datosFinales = Promise.all(dataFormat);
            return dataFormat;
        });
    }
    getNutricionByPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
};
PostRecetaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(PostRecetas_repository_1.PostRecetaRepository)),
    __param(1, typeorm_1.InjectRepository(nutricion_repository_1.NutricionRepository)),
    __param(2, typeorm_1.InjectRepository(ingrediente_receta_repository_1.IngredienteRepository)),
    __param(3, typeorm_1.InjectRepository(pasos_recetas_repository_1.PasosRecetasRepository)),
    __param(4, typeorm_1.InjectRepository(imagen_receta_repository_1.ImagenRecetaRepository)),
    __param(5, typeorm_1.InjectRepository(Usuario_1.Usuario)),
    __metadata("design:paramtypes", [PostRecetas_repository_1.PostRecetaRepository,
        nutricion_repository_1.NutricionRepository,
        ingrediente_receta_repository_1.IngredienteRepository,
        pasos_recetas_repository_1.PasosRecetasRepository,
        imagen_receta_repository_1.ImagenRecetaRepository,
        Repository_1.Repository,
        imagenes_post_service_1.ImagenesPostService,
        imagen_manager_service_1.ImagenManagerService,
        nutricion_service_1.NutricionService])
], PostRecetaService);
exports.PostRecetaService = PostRecetaService;
//# sourceMappingURL=postreceta.service.js.map