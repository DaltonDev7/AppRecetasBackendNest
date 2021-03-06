"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_service_1 = require("../../core/services/usuario.service");
const Usuario_1 = require("../../entities/Usuario");
const usuario_controller_1 = require("./controllers/usuario/usuario.controller");
const shared_module_1 = require("../../shared/shared.module");
const imagen_manager_service_1 = require("../../core/services/imagen-manager.service");
const imagen_receta_repository_1 = require("../../core/repositories/imagen-receta.repository");
const PostRecetas_repository_1 = require("../../core/repositories/PostRecetas.repository");
const postreceta_service_1 = require("../post-receta/services/postreceta.service");
const ingrediente_receta_repository_1 = require("../../core/repositories/ingrediente-receta.repository");
const pasos_recetas_repository_1 = require("../../core/repositories/pasos-recetas.repository");
const imagenes_post_service_1 = require("../post-receta/services/imagenes-post.service");
const nutricion_repository_1 = require("../../core/repositories/nutricion.repository");
const nutricion_service_1 = require("../../core/services/nutricion.service");
let UsuarioModule = class UsuarioModule {
};
UsuarioModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                Usuario_1.Usuario,
                imagen_receta_repository_1.ImagenRecetaRepository,
                PostRecetas_repository_1.PostRecetaRepository,
                nutricion_repository_1.NutricionRepository,
                ingrediente_receta_repository_1.IngredienteRepository,
                pasos_recetas_repository_1.PasosRecetasRepository
            ]),
            shared_module_1.SharedModule,
        ],
        controllers: [usuario_controller_1.UsuarioController],
        providers: [usuario_service_1.UsuarioService, imagen_manager_service_1.ImagenManagerService, postreceta_service_1.PostRecetaService, imagenes_post_service_1.ImagenesPostService, nutricion_service_1.NutricionService],
    })
], UsuarioModule);
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map