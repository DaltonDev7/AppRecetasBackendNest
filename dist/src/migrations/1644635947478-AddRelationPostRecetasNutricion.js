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
exports.AddRelationPostRecetasNutricion1644635947478 = void 0;
class AddRelationPostRecetasNutricion1644635947478 {
    constructor() {
        this.name = 'AddRelationPostRecetasNutricion1644635947478';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`nutricion\` ADD \`IdPostReceta\` int NULL`);
            yield queryRunner.query(`ALTER TABLE \`nutricion\` ADD CONSTRAINT \`FK_b456bef7dc7ff2f49d770013769\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.AddRelationPostRecetasNutricion1644635947478 = AddRelationPostRecetasNutricion1644635947478;
//# sourceMappingURL=1644635947478-AddRelationPostRecetasNutricion.js.map