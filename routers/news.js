const express = require('express')
const router = express.Router()
//image resize module
const uploads = require('../middleware/multer')
const { createNews,getAllNews,getSingleNews,getNewsByCategory,searchPosts } = require('../controller/news')
const {validator, result,validateFile} =require('../middleware/validator')

//get id from news
router.post('/create', uploads.single('thumbnail'),validator, validateFile,result,createNews )
router.get('/news', getAllNews)
router.get('/news/single/:id', getSingleNews)
router.get('/news/:category/:qty?', getNewsByCategory)
router.post('/news/search/:query', searchPosts);

module.exports = router