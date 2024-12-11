const express = require('express')
const upload = require('../middlewares/multerMiddleware')
const { createPost, getAllPost, postById } = require('../controllers/postController')

const postRouter = express.Router()

postRouter.route('/create/:id').post(upload.array('post-image'),createPost)

postRouter.route('/allpost').get(getAllPost)

postRouter.route('/allpost/:id').get(postById)

module.exports = postRouter