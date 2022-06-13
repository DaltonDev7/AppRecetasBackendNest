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
exports.PostRecetaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_postrecetas_dto_1 = require("../../core/dto/create-postrecetas-dto");
const image_helper_1 = require("../../core/helpers/image-helper");
const postreceta_service_1 = require("./services/postreceta.service");
const imagenes_post_service_1 = require("./services/imagenes-post.service");
let PostRecetaController = class PostRecetaController {
    constructor(postRecetaService, imagenesPostService) {
        this.postRecetaService = postRecetaService;
        this.imagenesPostService = imagenesPostService;
    }
    savePost(payload, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(file);
                //   payload.Imagenes = file
                yield this.postRecetaService.savePost(payload).then((data) => {
                    return res.status(201).json({
                        msg: 'Post Creado',
                        IdPost: data.Id
                    });
                });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    saveImagenesPost(files, body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('recibiendo imagenes post');
                console.log(files);
                console.log(body.IdPost);
                if (files != undefined) {
                    yield this.postRecetaService.saveImagenesPost(files, body.IdPost);
                    return res.status(201).json({
                        msg: 'Imagenes Guardadas'
                    });
                }
                return res.status(204).json({ msg: 'Ok' });
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
    getTareas(idUser, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // this.postRecetaService.getPostByIdUser(idUser).then((data) => {
                //     return res.status(200).json({
                //         data
                //     })
                // })
                return res.status(200).json(yield this.postRecetaService.getPostByIdUser(idUser));
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: 'Ha ocurrido un error',
                    error
                });
            }
        });
    }
};
__decorate([
    common_1.Post('Save'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_postrecetas_dto_1.CreatePostRecetaDTO, Object]),
    __metadata("design:returntype", Promise)
], PostRecetaController.prototype, "savePost", null);
__decorate([
    common_1.Post('SaveImagenesPost'),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('file', 5, image_helper_1.storageConfig('postImages'))),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Object]),
    __metadata("design:returntype", Promise)
], PostRecetaController.prototype, "saveImagenesPost", null);
__decorate([
    common_1.Get('GetPostByUser/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object, Object]),
    __metadata("design:returntype", Promise)
], PostRecetaController.prototype, "getTareas", null);
PostRecetaController = __decorate([
    common_1.Controller('postreceta'),
    __metadata("design:paramtypes", [postreceta_service_1.PostRecetaService,
        imagenes_post_service_1.ImagenesPostService])
], PostRecetaController);
exports.PostRecetaController = PostRecetaController;
//# sourceMappingURL=post-receta.controller.js.map