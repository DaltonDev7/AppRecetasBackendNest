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
exports.createTablePostRecetasIngredienteImagenes1644383981469 = void 0;
class createTablePostRecetasIngredienteImagenes1644383981469 {
    constructor() {
        this.name = 'createTablePostRecetasIngredienteImagenes1644383981469';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`imagenesrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`NombreRuta\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`ingredientesrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Descripciom\` varchar(255) NOT NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`postrecetas\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`Titulo\` varchar(25) NOT NULL, \`ImgPost\` varchar(255) NULL, \`Descripcion\` varchar(255) NULL, \`Pasos\` varchar(255) NULL, \`Ingredientes\` varchar(255) NULL, \`Nutricion\` varchar(255) NULL, \`CantidadPersona\` varchar(255) NULL, \`FechaCreacion\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`FechaModificacion\` datetime NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE \`postrecetas\``);
            yield queryRunner.query(`DROP TABLE \`ingredientesrecetas\``);
            yield queryRunner.query(`DROP TABLE \`imagenesrecetas\``);
        });
    }
}
exports.createTablePostRecetasIngredienteImagenes1644383981469 = createTablePostRecetasIngredienteImagenes1644383981469;
//# sourceMappingURL=1644383981469-createTablePostRecetasIngredienteImagenes.js.map