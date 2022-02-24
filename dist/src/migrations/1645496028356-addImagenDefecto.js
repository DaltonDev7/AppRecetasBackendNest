"use strict";
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
exports.addImagenDefecto1645496028356 = void 0;
class addImagenDefecto1645496028356 {
    constructor() {
        this.name = 'addImagenDefecto1645496028356';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`ImagenDefecto\` tinyint NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`ImagenDefecto\``);
        });
    }
}
exports.addImagenDefecto1645496028356 = addImagenDefecto1645496028356;
//# sourceMappingURL=1645496028356-addImagenDefecto.js.map