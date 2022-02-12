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
exports.AddRelationPostRecetasImagenReceta1644635155654 = void 0;
class AddRelationPostRecetasImagenReceta1644635155654 {
    constructor() {
        this.name = 'AddRelationPostRecetasImagenReceta1644635155654';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`imagenesrecetas\` ADD \`IdPostReceta\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`imagenesrecetas\` ADD CONSTRAINT \`FK_7ef951706d98fd0b24462e86be4\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`imagenesrecetas\` DROP FOREIGN KEY \`FK_7ef951706d98fd0b24462e86be4\``);
            yield queryRunner.query(`ALTER TABLE \`imagenesrecetas\` DROP COLUMN \`IdPostReceta\``);
        });
    }
}
exports.AddRelationPostRecetasImagenReceta1644635155654 = AddRelationPostRecetasImagenReceta1644635155654;
//# sourceMappingURL=1644635155654-AddRelationPostRecetasImagenReceta.js.map