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
exports.eliminandoAtributosPost1644715403825 = void 0;
class eliminandoAtributosPost1644715403825 {
    constructor() {
        this.name = 'eliminandoAtributosPost1644715403825';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`ImgPost\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Pasos\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Ingredientes\``);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Ingredientes\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Pasos\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`ImgPost\` varchar(255) NULL`);
        });
    }
}
exports.eliminandoAtributosPost1644715403825 = eliminandoAtributosPost1644715403825;
//# sourceMappingURL=1644715403825-eliminandoAtributosPost.js.map