const News = require('../models/News.model')

module.exports.newsController = {
    addNews: async (req, res) => {
        const { title, content, _catId } = req.body
        try {
            const post = await News.create({
                title,
                content,
                _catId
            })
            res.json(`Новость ${post.title} добавлена`)
        } catch (error) {
            res.json(error)
        }
                
    },

    deleteNewsById: async (req, res) => {
        try {
            await News.findByIdAndRemove(req.params.id)
            res.json('Новость удалена')
        } catch (error) {
            res.json(error)
        }
    },

    editNewsById: async (req, res) => {
        try {
            await News.findByIdAndUpdate(req.params.id, req.body)
            res.json('Изменения сохранены')
        } catch (error) {
            res.json(error)
        }
    },

    getNews: async (req, res) => {
        try {
            const post = await News.find()
            res.json(post)
        } catch (error) {
            res.json(error)
        }
    },
    getNewsById: async (req, res) => {
        try {
            const post = await News.findById(req.params.id)
            res.json(post)
        } catch (error) {
            res.json(error)
        }
    },
    getNewsByCat: async(req, res) => {
        try {
            const post = await News.find({_catId:req.params.id})
            res.json(post)
        } catch (error) {
            res.json(error)
        }
    },
}