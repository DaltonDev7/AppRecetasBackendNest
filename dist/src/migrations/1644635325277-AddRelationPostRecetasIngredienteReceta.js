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
exports.AddRelationPostRecetasIngredienteReceta1644635325277 = void 0;
class AddRelationPostRecetasIngredienteReceta1644635325277 {
    constructor() {
        this.name = 'AddRelationPostRecetasIngredienteReceta1644635325277';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD \`IdPostReceta\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` ADD CONSTRAINT \`FK_5768adc53529b989bab92c94fd4\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP FOREIGN KEY \`FK_5768adc53529b989bab92c94fd4\``);
            yield queryRunner.query(`ALTER TABLE \`ingredientesrecetas\` DROP COLUMN \`IdPostReceta\``);
        });
    }
}
exports.AddRelationPostRecetasIngredienteReceta1644635325277 = AddRelationPostRecetasIngredienteReceta1644635325277;
//# sourceMappingURL=1644635325277-AddRelationPostRecetasIngredienteReceta.js.map