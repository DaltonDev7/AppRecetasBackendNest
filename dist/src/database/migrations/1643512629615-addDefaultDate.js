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
exports.addDefaultDate1643512629615 = void 0;
class addDefaultDate1643512629615 {
    constructor() {
        this.name = 'addDefaultDate1643512629615';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`usuarios\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL`);
        });
    }
}
exports.addDefaultDate1643512629615 = addDefaultDate1643512629615;
//# sourceMappingURL=1643512629615-addDefaultDate.js.map