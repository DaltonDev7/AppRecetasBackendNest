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
exports.createTableNutricion1644384518943 = void 0;
class createTableNutricion1644384518943 {
    constructor() {
        this.name = 'createTableNutricion1644384518943';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Titulo\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`ImgPost\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Descripcion\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Pasos\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Ingredientes\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Nutricion\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Calorias\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Grasas\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Azucares\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Proteinas\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Sodio\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Carbohidratos\` decimal NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Titulo\` varchar(25) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`ImgPost\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Descripcion\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Pasos\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Ingredientes\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Nutricion\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` varchar(255) NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`CantidadPersona\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Nutricion\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Ingredientes\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Pasos\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Descripcion\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`ImgPost\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Titulo\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Carbohidratos\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Sodio\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Proteinas\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Azucares\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Grasas\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`Calorias\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`CantidadPersona\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Nutricion\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Ingredientes\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Pasos\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Descripcion\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`ImgPost\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`Titulo\` varchar(25) NOT NULL`);
        });
    }
}
exports.createTableNutricion1644384518943 = createTableNutricion1644384518943;
//# sourceMappingURL=1644384518943-createTableNutricion.js.map