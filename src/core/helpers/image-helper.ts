import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { diskStorage } from "multer";
import path = require("path");
import { v4 as uuidv4 } from 'uuid';




export const storageConfig = (nombreDestinacion: string) => {
    const congif: MulterOptions = {
        storage: diskStorage({
            destination: `./uploads/${nombreDestinacion}`,
            filename: (req, file, callBack) => {
                const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                const extension: string = path.parse(file.originalname).ext

                callBack(null, `${filename}${extension}`)
            }
        }),
        fileFilter: fileFilter,
        limits: {
            fieldSize: 5 * 1024 * 1024 //5MB
        }
    }

    return congif;
}


export const fileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Formato invalido'), false)
    }
    callback(null, true)
}
