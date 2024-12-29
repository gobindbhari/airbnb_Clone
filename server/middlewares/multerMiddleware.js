const multer  = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('///////////////////',file)
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log('.....................', file)
      const fileExtension = file.originalname.split('.').pop();
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + fileExtension
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

  const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);            // Accept the file
    } else {
      cb(new Error('Invalid file type'), false);        // Reject the file
    }
  };
  
  const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
   })

  module.exports = upload