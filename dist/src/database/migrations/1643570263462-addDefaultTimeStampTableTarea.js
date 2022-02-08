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
exports.addDefaultTimeStampTableTarea1643570263462 = void 0;
class addDefaultTimeStampTableTarea1643570263462 {
    constructor() {
        this.name = 'addDefaultTimeStampTableTarea1643570263462';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`tareas\` CHANGE \`FechaCreacion\` \`FechaCreacion\` timestamp NOT NULL`);
        });
    }
}
exports.addDefaultTimeStampTableTarea1643570263462 = addDefaultTimeStampTableTarea1643570263462;
//# sourceMappingURL=1643570263462-addDefaultTimeStampTableTarea.js.map