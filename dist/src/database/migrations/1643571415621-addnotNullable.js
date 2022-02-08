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
exports.addnotNullable1643571415621 = void 0;
class addnotNullable1643571415621 {
    constructor() {
        this.name = 'addnotNullable1643571415621';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP INDEX \`FK_3b03fe8f236d483cf6f49700c81\` ON \`tareas\``);
            yield queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`IdUsuario\` \`IdUsuario\` int NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`tareas\` ADD CONSTRAINT \`FK_3b03fe8f236d483cf6f49700c81\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`usuarios\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`tareas\` DROP FOREIGN KEY \`FK_3b03fe8f236d483cf6f49700c81\``);
            yield queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`IdUsuario\` \`IdUsuario\` int NULL`);
            yield queryRunner.query(`CREATE INDEX \`FK_3b03fe8f236d483cf6f49700c81\` ON \`tareas\` (\`IdUsuario\`)`);
        });
    }
}
exports.addnotNullable1643571415621 = addnotNullable1643571415621;
//# sourceMappingURL=1643571415621-addnotNullable.js.map