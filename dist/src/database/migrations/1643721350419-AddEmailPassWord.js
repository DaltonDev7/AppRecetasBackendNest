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
exports.AddEmailPassWord1643721350419 = void 0;
class AddEmailPassWord1643721350419 {
    constructor() {
        this.name = 'AddEmailPassWord1643721350419';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`Email\` varchar(50) NULL`);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` ADD UNIQUE INDEX \`IDX_1982e89c37d5663406133e30db\` (\`Email\`)`);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` ADD \`PassWord\` varchar(255) NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`PassWord\``);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` DROP INDEX \`IDX_1982e89c37d5663406133e30db\``);
            yield queryRunner.query(`ALTER TABLE \`usuarios\` DROP COLUMN \`Email\``);
        });
    }
}
exports.AddEmailPassWord1643721350419 = AddEmailPassWord1643721350419;
//# sourceMappingURL=1643721350419-AddEmailPassWord.js.map