const express = require('express')
const upload = require('../middlewares/multerMiddleware')
const { createPost } = require('../controllers/postController')

const postRouter = express.Router()

postRouter.route('/create').post(upload.array('post-image'),createPost)


module.exports = postRouter