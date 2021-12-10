const express = require('express')
const router = express.Router()
//image resize module
const uploads = require('../middleware/multer')
const { createNews } = require('../controller/news')
//express validator 
const {check, validationResukt} = require('express-validator')



//get id from news
router.post('/create', uploads.single('thumbnail'),createNews )

module.exports = router