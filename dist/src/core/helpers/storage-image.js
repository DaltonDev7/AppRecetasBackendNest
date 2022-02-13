"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageConfig = void 0;
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
        })
    };
    return congif;
};
exports.storageConfig = storageConfig;
// export const storageConfig: MulterOptions = {
//     storage: diskStorage({
//         destination: './uploads/postImages',
//         filename: (req, file, callBack) => {
//             const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
//             const extension: string = path.parse(file.originalname).ext
//             callBack(null, `${filename}${extension}`)
//         }
//     })
// }
//# sourceMappingURL=storage-image.js.map