"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = exports.storageConfig = void 0;
const multer_1 = require("multer");
const path = require("path");
const uuid_1 = require("uuid");
const storageConfig = (nombreDestinacion) => {
    const congif = {
        storage: multer_1.diskStorage({
            destination: `./uploads/${nombreDestinacion}`,
            filename: (req, file, callBack) => {
                const filename = path.parse(file.originalname).name.replace(/\s/g, '') + uuid_1.v4();
                const extension = path.parse(file.originalname).ext;
                callBack(null, `${filename}${extension}`);
            }
        }),
        fileFilter: exports.fileFilter,
        limits: {
            fieldSize: 5 * 1024 * 1024 //5MB
        }
    };
    return congif;
};
exports.storageConfig = storageConfig;
const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Formato invalido'), false);
    }
    callback(null, true);
};
exports.fileFilter = fileFilter;
//# sourceMappingURL=image-helper.js.map