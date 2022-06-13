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
exports.addRelationSexo1645030309093 = void 0;
class addRelationSexo1645030309093 {
    constructor() {
        this.name = 'addRelationSexo1645030309093';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`sexo\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`IdSexo\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_bc8961ae83f69a42cb5be03cd5a\` FOREIGN KEY (\`IdSexo\`) REFERENCES \`sexo\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_bc8961ae83f69a42cb5be03cd5a\``);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`IdSexo\``);
            yield queryRunner.query(`DROP TABLE \`sexo\``);
        });
    }
}
exports.addRelationSexo1645030309093 = addRelationSexo1645030309093;
//# sourceMappingURL=1645030309093-addRelationSexo.js.map