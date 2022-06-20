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
exports.relacionarUnoAMuchosPostToCalificaciones1655730857668 = void 0;
class relacionarUnoAMuchosPostToCalificaciones1655730857668 {
    constructor() {
        this.name = 'relacionarUnoAMuchosPostToCalificaciones1655730857668';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD \`IdPostReceta\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD CONSTRAINT \`FK_cc22499445ac90b990e8d4a6dd2\` FOREIGN KEY (\`IdPostReceta\`) REFERENCES \`postrecetas\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP FOREIGN KEY \`FK_cc22499445ac90b990e8d4a6dd2\``);
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP COLUMN \`IdPostReceta\``);
        });
    }
}
exports.relacionarUnoAMuchosPostToCalificaciones1655730857668 = relacionarUnoAMuchosPostToCalificaciones1655730857668;
//# sourceMappingURL=1655730857668-relacionar%20uno%20a%20muchos%20post%20to%20calificaciones.js.map