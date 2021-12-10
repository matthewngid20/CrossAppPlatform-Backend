const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
//image resize module
const sharp = require('sharp')

const uploads = require('../middleware/multer')
const { createNews } = require('../controller/news')


//get id from news
router.post('/create', uploads.single('thumbnail'),createNews )

module.exports = router