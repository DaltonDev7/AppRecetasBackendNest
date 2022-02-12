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
exports.AddRelationPostRecetasPasosRecetas1644634937171 = void 0;
class AddRelationPostRecetasPasosRecetas1644634937171 {
    constructor() {
        this.name = 'AddRelationPostRecetasPasosRecetas1644634937171';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`pasos_recetas\` ADD \`IdPostReceta\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`pasos_recetas\` ADD CONSTRAINT \`FK_b427cda544b3901dec0cb715a86\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`pasos_recetas\` DROP FOREIGN KEY \`FK_b427cda544b3901dec0cb715a86\``);
            yield queryRunner.query(`ALTER TABLE \`pasos_recetas\` DROP COLUMN \`IdPostReceta\``);
        });
    }
}
exports.AddRelationPostRecetasPasosRecetas1644634937171 = AddRelationPostRecetasPasosRecetas1644634937171;
//# sourceMappingURL=1644634937171-AddRelationPostRecetasPasosRecetas.js.map