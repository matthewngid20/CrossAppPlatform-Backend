const express = require('express')
const router = express.Router()
//image resize module
const uploads = require('../middleware/multer')
const { createNews } = require('../controller/news')
const {validator, result} =require('../middleware/validator')

//get id from news
router.post('/create', uploads.single('thumbnail'),validator, result,createNews )

module.exports = router