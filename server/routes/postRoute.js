const express = require('express')
const upload = require('../middlewares/multerMiddleware')
const { createPost, getAllPost, postById } = require('../controllers/postController')
const checkJWT = require('../middlewares/checkJWT')

const postRouter = express.Router()

postRouter.route('/create/:id').post(upload.array('post-image',12),createPost)

postRouter.route('/allpost').get(getAllPost)

postRouter.route('/:id').get(postById)

module.exports = postRouter