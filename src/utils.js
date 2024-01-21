import {dirname} from "path"
import { fileURLToPath } from "url"
import multer from "multer"

export const __dirname=dirname(fileURLToPath(import.meta.url))

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, `${__dirname}/public/img`)
    },
    filename: function (req, file, callback){
        callback(null,`${Date.now()}-${file.originalname}`)
    }
})

export const uploader = multer ({
    storage
})