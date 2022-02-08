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
exports.CreateTables1643476283859 = void 0;
class CreateTables1643476283859 {
    constructor() {
        this.name = 'CreateTables1643476283859';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE \`usuarios\``);
            yield queryRunner.query(`DROP TABLE \`tareas\``);
        });
    }
}
exports.CreateTables1643476283859 = CreateTables1643476283859;
//# sourceMappingURL=1643476283859-CreateTables.js.map