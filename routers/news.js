const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
//image resize module
const sharp = require('sharp')
const imageProcess = require('../util/imageProcess')
const storage = multer.memoryStorage()
const uploads = multer({storage})
const News = require('../news/news')

//get id from news
router.post('/create', uploads.single('thumbnail'), async (req, res) => {
    
    const news = new News()
    const id = news.createId()
    
    const imageName = await imageProcess(req,id)

    news.create(req.body,id,imageName) 
    res.send('submitted')
})

module.exports = router