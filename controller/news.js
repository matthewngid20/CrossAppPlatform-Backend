const News = require('../news/news')
const news = new News()
const imageProcess = require('../util/imageProcess')

const createNews = async (req, res) => {
    try {
        const id = news.createId()

        const imageName = await imageProcess(req, id)

        news.create(req.body, id, imageName)
        res.json({ success: true, message: "successfully submitted" })
    }
    catch (error) {
        res.json({ success: false, message: "failed to submit, server error" })
        console.log("error inside CreateNews", error.message);
    }
}
const getAllNews = async (req, res) => {
    try {
        const data = await news.getAll()
        res.json({ success: true, news: data })
    } catch (error) {
        console.log("error inside getAllNews controller", error.message);
    }
}
const getSingleNews = async (req, res) => {
    try {
        const data = await news.getSingle(req.params.id)
        if (!data) {
            return res.json({ success: false, message: 'No post found!' })
        } 
        res.json({ success: true, news: data })
    } catch (error) {
        res.json({ success: false, news: data })
        console.log("error inside getSingleNews controller", error.message);
    }
}
module.exports = {
    createNews,
    getAllNews,
    getSingleNews
}