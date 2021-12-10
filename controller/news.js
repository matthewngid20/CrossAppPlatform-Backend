const createNews = async (req, res) => {
    const News = require('../news/news')
    const imageProcess = require('../util/imageProcess')
    try {
        const news = new News()
        const id = news.createId()
        
        const imageName = await imageProcess(req,id)
    
        news.create(req.body,id,imageName) 
        res.send('submitted')
    }
    catch (error) {
        console.log("error inside CreateNews", error.message);
    }
} 

module.exports = {
    createNews
}