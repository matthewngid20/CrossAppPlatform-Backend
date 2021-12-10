const fs = require('fs')
const sharp = require('sharp')

//resize image func
const imageProcess = async(req,id) => {
    fs.access('./data/uploads',  (err) => {
        if(err){
            fs.mkdirSync('./data/uploads')
            console.log("error is --------", err);
        }
    })
    //name file and format file
    const formattedName = req.file.originalname.split(' ').join('-')
    const fileName = `${id}-${formattedName}`
    
    try {
        await sharp(req.file.buffer).resize({width: 615, height: 350}).toFile('./data/uploads/' +`${fileName}`)
    } catch (error) {
        console.log('error in image processing: ', error);
    }
    return fileName
   
}

module.exports = imageProcess