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
exports.createTableNutricionx21644384593400 = void 0;
class createTableNutricionx21644384593400 {
    constructor() {
        this.name = 'createTableNutricionx21644384593400';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`nutricion\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Calorias\` decimal NULL, \`Grasas\` decimal NULL, \`Azucares\` decimal NULL, \`Proteinas\` decimal NULL, \`Sodio\` decimal NULL, \`Carbohidratos\` decimal NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Calorias\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Grasas\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Azucares\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Proteinas\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Sodio\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Carbohidratos\``);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Carbohidratos\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Sodio\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Proteinas\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Azucares\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Grasas\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Calorias\` decimal NULL`);
            yield queryRunner.query(`DROP TABLE \`nutricion\``);
        });
    }
}
exports.createTableNutricionx21644384593400 = createTableNutricionx21644384593400;
//# sourceMappingURL=1644384593400-createTableNutricionx2.js.map