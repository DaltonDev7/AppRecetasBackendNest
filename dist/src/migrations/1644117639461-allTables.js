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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allTables1644117639461 = void 0;
var allTables1644117639461 = /** @class */ (function () {
    function allTables1644117639461() {
        this.name = 'allTables1644117639461';
    }
    allTables1644117639461.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE `tareas` (`Id` int NOT NULL AUTO_INCREMENT, `Descripcion` varchar(258) NOT NULL, `FechaCreacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `FechaModificacion` datetime NULL, `IdUsuario` int NOT NULL, PRIMARY KEY (`Id`)) ENGINE=InnoDB")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `usuarios` (`Id` int NOT NULL AUTO_INCREMENT, `Nombres` varchar(25) NOT NULL, `Email` varchar(50) NULL, `PassWord` varchar(255) NULL, `Apellidos` varchar(25) NOT NULL, `FechaCreacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `FechaModificacion` datetime NULL, UNIQUE INDEX `IDX_1982e89c37d5663406133e30db` (`Email`), PRIMARY KEY (`Id`)) ENGINE=InnoDB")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `rolesusuarios` (`Id` int NOT NULL AUTO_INCREMENT, `IdUsuario` int NOT NULL, `IdRol` int NOT NULL, PRIMARY KEY (`Id`)) ENGINE=InnoDB")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE `rol` (`Id` int NOT NULL AUTO_INCREMENT, `Nombre` varchar(25) NOT NULL, PRIMARY KEY (`Id`)) ENGINE=InnoDB")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `tareas` ADD CONSTRAINT `FK_3b03fe8f236d483cf6f49700c81` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rolesusuarios` ADD CONSTRAINT `FK_3ace992774108b76af258f2bf6d` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rolesusuarios` ADD CONSTRAINT `FK_107cde6e2365ab0b7322dfdf74d` FOREIGN KEY (`IdRol`) REFERENCES `rol`(`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    allTables1644117639461.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE `rolesusuarios` DROP FOREIGN KEY `FK_107cde6e2365ab0b7322dfdf74d`")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `rolesusuarios` DROP FOREIGN KEY `FK_3ace992774108b76af258f2bf6d`")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE `tareas` DROP FOREIGN KEY `FK_3b03fe8f236d483cf6f49700c81`")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `rol`")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `rolesusuarios`")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX `IDX_1982e89c37d5663406133e30db` ON `usuarios`")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `usuarios`")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE `tareas`")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return allTables1644117639461;
}());
exports.allTables1644117639461 = allTables1644117639461;
//# sourceMappingURL=1644117639461-allTables.js.map