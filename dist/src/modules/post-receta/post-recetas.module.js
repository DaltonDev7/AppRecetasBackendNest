"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRecetasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const imagen_receta_repository_1 = require("../../core/repositories/imagen-receta.repository");
const ingrediente_receta_repository_1 = require("../../core/repositories/ingrediente-receta.repository");
const nutricion_repository_1 = require("../../core/repositories/nutricion.repository");
const pasos_recetas_repository_1 = require("../../core/repositories/pasos-recetas.repository");
const PostRecetas_repository_1 = require("../../core/repositories/PostRecetas.repository");
const imagen_manager_service_1 = require("../../core/services/imagen-manager.service");
const nutricion_service_1 = require("../../core/services/nutricion.service");
const Usuario_1 = require("../../entities/Usuario");
const post_receta_controller_1 = require("./post-receta.controller");
const imagenes_post_service_1 = require("./services/imagenes-post.service");
const postreceta_service_1 = require("./services/postreceta.service");
let PostRecetasModule = class PostRecetasModule {
};
PostRecetasModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                PostRecetas_repository_1.PostRecetaRepository,
                ingrediente_receta_repository_1.IngredienteRepository,
                pasos_recetas_repository_1.PasosRecetasRepository,
                imagen_receta_repository_1.ImagenRecetaRepository,
                nutricion_repository_1.NutricionRepository,
                Usuario_1.Usuario
            ])],
        controllers: [post_receta_controller_1.PostRecetaController],
        providers: [postreceta_service_1.PostRecetaService, imagenes_post_service_1.ImagenesPostService, imagen_manager_service_1.ImagenManagerService, nutricion_service_1.NutricionService]
    })
], PostRecetasModule);
exports.PostRecetasModule = PostRecetasModule;
//# sourceMappingURL=post-recetas.module.js.map