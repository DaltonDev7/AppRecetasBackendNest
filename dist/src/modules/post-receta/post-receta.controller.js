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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRecetaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const rxjs_1 = require("rxjs");
const image_helper_1 = require("../../core/helpers/image-helper");
let PostRecetaController = class PostRecetaController {
    constructor() {
    }
    savePost(payload) {
        return rxjs_1.of({ imagePath: payload.filename });
    }
};
__decorate([
    common_1.Post('Save'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', image_helper_1.storageConfig('postImages'))),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostRecetaController.prototype, "savePost", null);
PostRecetaController = __decorate([
    common_1.Controller('postreceta'),
    __metadata("design:paramtypes", [])
], PostRecetaController);
exports.PostRecetaController = PostRecetaController;
//# sourceMappingURL=post-receta.controller.js.map