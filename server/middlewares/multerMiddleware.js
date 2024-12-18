const multer  = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + file.originalname
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const fileFilter = (req,res,cb)=>{
    const allowImagesType = ['image/jpg','image/jpeg','image/png']
  }
  const upload = multer({ storage: storage })

  module.exports = upload