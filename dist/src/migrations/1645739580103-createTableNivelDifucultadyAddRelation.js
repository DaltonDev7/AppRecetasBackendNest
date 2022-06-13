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
exports.createTableNivelDifucultadyAddRelation1645739580103 = void 0;
class createTableNivelDifucultadyAddRelation1645739580103 {
    constructor() {
        this.name = 'createTableNivelDifucultadyAddRelation1645739580103';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`nivel-dificultad\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD \`IdNivelDificultad\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` ADD CONSTRAINT \`FK_d57996bb7756fdf24feaa03a2f4\` FOREIGN KEY (\`IdNivelDificultad\`) REFERENCES \`nivel-dificultad\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP FOREIGN KEY \`FK_d57996bb7756fdf24feaa03a2f4\``);
            yield queryRunner.query(`ALTER TABLE \`postrecetas\` DROP COLUMN \`IdNivelDificultad\``);
            yield queryRunner.query(`DROP TABLE \`nivel-dificultad\``);
        });
    }
}
exports.createTableNivelDifucultadyAddRelation1645739580103 = createTableNivelDifucultadyAddRelation1645739580103;
//# sourceMappingURL=1645739580103-createTableNivelDifucultadyAddRelation.js.map