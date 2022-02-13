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
exports.cambiandoNumeroPost1644715670665 = void 0;
class cambiandoNumeroPost1644715670665 {
    constructor() {
        this.name = 'cambiandoNumeroPost1644715670665';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` int NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` varchar(255) NULL`);
        });
    }
}
exports.cambiandoNumeroPost1644715670665 = cambiandoNumeroPost1644715670665;
//# sourceMappingURL=1644715670665-cambiandoNumeroPost.js.map