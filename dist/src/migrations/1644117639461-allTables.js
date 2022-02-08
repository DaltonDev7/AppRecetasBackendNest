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
exports.allTables1644117639461 = void 0;
class allTables1644117639461 {
    constructor() {
        this.name = 'allTables1644117639461';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdUsuario\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`Email\` varchar(50) NULL, \`PassWord\` varchar(255) NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`rolesusuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`IdUsuario\` int NOT NULL, \`IdRol\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`rol\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`rolesusuarios\` ADD CONSTRAINT \`FK_3ace992774108b76af258f2bf6d\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`rolesusuarios\` ADD CONSTRAINT \`FK_107cde6e2365ab0b7322dfdf74d\` FOREIGN KEY (\`IdRol\`) REFERENCES \`rol\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`rolesusuarios\` DROP FOREIGN KEY \`FK_107cde6e2365ab0b7322dfdf74d\``);
            yield queryRunner.query(`ALTER TABLE \`rolesusuarios\` DROP FOREIGN KEY \`FK_3ace992774108b76af258f2bf6d\``);
            yield queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
            yield queryRunner.query(`DROP TABLE \`rol\``);
            yield queryRunner.query(`DROP TABLE \`rolesusuarios\``);
            yield queryRunner.query(`DROP INDEX \`IDX_1982e89c37d5663406133e30db\` ON \`usuarios\``);
            yield queryRunner.query(`DROP TABLE \`usuarios\``);
            yield queryRunner.query(`DROP TABLE \`tareas\``);
        });
    }
}
exports.allTables1644117639461 = allTables1644117639461;
//# sourceMappingURL=1644117639461-allTables.js.map