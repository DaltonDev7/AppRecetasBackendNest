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
exports.relacionarUsuarioConPostcalificaicon1655733351129 = void 0;
class relacionarUsuarioConPostcalificaicon1655733351129 {
    constructor() {
        this.name = 'relacionarUsuarioConPostcalificaicon1655733351129';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD \`IdUsuario\` int NULL`);
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` ADD CONSTRAINT \`FK_f74749fb18868fcbc369c3efa06\` FOREIGN KEY (\`IdUsuario\`) REFERENCES \`post-calificaciones\`(\`Id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP FOREIGN KEY \`FK_f74749fb18868fcbc369c3efa06\``);
            yield queryRunner.query(`ALTER TABLE \`post-calificaciones\` DROP COLUMN \`IdUsuario\``);
        });
    }
}
exports.relacionarUsuarioConPostcalificaicon1655733351129 = relacionarUsuarioConPostcalificaicon1655733351129;
//# sourceMappingURL=1655733351129-relacionar%20usuario%20con%20postcalificaicon.js.map