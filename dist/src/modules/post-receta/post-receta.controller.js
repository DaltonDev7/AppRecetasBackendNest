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
let PostRecetaController = class PostRecetaController {
    constructor(postRecetaService) {
        this.postRecetaService = postRecetaService;
    }
    savePost(file, payload, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.postRecetaService.savePost(payload).then(() => {
                    return res.status(201).json({
                        msg: 'Post Creado'
                    });
                });
            }
            catch (error) {
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
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', image_helper_1.storageConfig('postImages'))),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_postrecetas_dto_1.CreatePostRecetaDTO, Object]),
    __metadata("design:returntype", Promise)
], PostRecetaController.prototype, "savePost", null);
PostRecetaController = __decorate([
    common_1.Controller('postreceta'),
    __metadata("design:paramtypes", [postreceta_service_1.PostRecetaService])
], PostRecetaController);
exports.PostRecetaController = PostRecetaController;
//# sourceMappingURL=post-receta.controller.js.map