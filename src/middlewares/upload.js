const multer = require('multer');
const path = require('path');

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve('src', 'public', 'image'));
    },
    filename: (req, file, callback) => {
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})

const upload = multer({ storage: multerDiskStorage });

module.exports = upload;