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
exports.AddRelationRecetasUsuario1644634604235 = void 0;
class AddRelationRecetasUsuario1644634604235 {
    constructor() {
        this.name = 'AddRelationRecetasUsuario1644634604235';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`IdUsuario\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD CONSTRAINT \`FK_708b9d6209fb6671278e17e19e0\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP FOREIGN KEY \`FK_708b9d6209fb6671278e17e19e0\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`IdUsuario\``);
        });
    }
}
exports.AddRelationRecetasUsuario1644634604235 = AddRelationRecetasUsuario1644634604235;
//# sourceMappingURL=1644634604235-AddRelationRecetasUsuario.js.map