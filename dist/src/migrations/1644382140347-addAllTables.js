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
exports.addAllTables1644382140347 = void 0;
class addAllTables1644382140347 {
    constructor() {
        this.name = 'addAllTables1644382140347';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`tareas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripcion\` varchar(258) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, \`IdUsuario\` int NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`usuarios\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombres\` varchar(25) NOT NULL, \`Email\` varchar(50) NULL, \`PassWord\` varchar(255) NULL, \`Apellidos\` varchar(25) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`), PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`rol\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Nombre\` varchar(25) NOT NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`usuarios_roles\` (\`IdUsuario\` int NOT NULL, \`IdRol\` int NOT NULL, INDEX \`IDX_f726b32c9ae7a41f1edde7295c\` (\`IdUsuario\`), INDEX \`IDX_e95d95b16547ceae00d04bdf68\` (\`IdRol\`), PRIMARY KEY (\`IdUsuario\`, \`IdRol\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`usuarios_roles\` ADD CONSTRAINT \`FK_f726b32c9ae7a41f1edde7295cc\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE \`usuarios_roles\` ADD CONSTRAINT \`FK_e95d95b16547ceae00d04bdf687\` FOREIGN KEY (\`IdRol\`) REFERENCES \`rol\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios_roles\` DROP FOREIGN KEY \`FK_e95d95b16547ceae00d04bdf687\``);
            yield queryRunner.query(`ALTER TABLE \`usuarios_roles\` DROP FOREIGN KEY \`FK_f726b32c9ae7a41f1edde7295cc\``);
            yield queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
            yield queryRunner.query(`DROP INDEX \`IDX_e95d95b16547ceae00d04bdf68\` ON \`usuarios_roles\``);
            yield queryRunner.query(`DROP INDEX \`IDX_f726b32c9ae7a41f1edde7295c\` ON \`usuarios_roles\``);
            yield queryRunner.query(`DROP TABLE \`usuarios_roles\``);
            yield queryRunner.query(`DROP TABLE \`rol\``);
            yield queryRunner.query(`DROP INDEX \`IDX_1982e89c37d5663406133e30db\` ON \`usuarios\``);
            yield queryRunner.query(`DROP TABLE \`usuarios\``);
            yield queryRunner.query(`DROP TABLE \`tareas\``);
        });
    }
}
exports.addAllTables1644382140347 = addAllTables1644382140347;
//# sourceMappingURL=1644382140347-addAllTables.js.map