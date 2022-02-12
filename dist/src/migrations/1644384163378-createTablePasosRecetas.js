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
exports.createTablePasosRecetas1644384163378 = void 0;
class createTablePasosRecetas1644384163378 {
    constructor() {
        this.name = 'createTablePasosRecetas1644384163378';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` CHANGE \`Descripciom\` \`Descripcion\` varchar(255) NOT NULL`);
            yield queryRunner.query(`CREATE TABLE \`pasos_recetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP COLUMN \`Descripcion\``);
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD \`Descripcion\` varchar(255) NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP COLUMN \`Descripcion\``);
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD \`Descripcion\` varchar(255) NOT NULL`);
            yield queryRunner.query(`DROP TABLE \`pasos_recetas\``);
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` CHANGE \`Descripcion\` \`Descripciom\` varchar(255) NOT NULL`);
        });
    }
}
exports.createTablePasosRecetas1644384163378 = createTablePasosRecetas1644384163378;
//# sourceMappingURL=1644384163378-createTablePasosRecetas.js.map