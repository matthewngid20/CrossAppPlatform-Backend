const createNews = async (req, res) => {
    const News = require('../news/news')
    const imageProcess = require('../util/imageProcess')
    try {
        const news = new News()
        const id = news.createId()
        
        const imageName = await imageProcess(req,id)
    
        news.create(req.body,id,imageName) 
        res.json({success: true, message: "successfully submitted"})
    }
    catch (error) {
        res.json({success: false, message: "failed to submit, server error"})
        console.log("error inside CreateNews", error.message);
    }
} 

module.exports = {
    createNews
}