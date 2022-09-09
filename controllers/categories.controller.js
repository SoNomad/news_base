const Category = require('../models/Category.model')

module.exports.categoriesController = {
    getCategories: async (req, res) => {
        try {
            Category.find({}).then((data)=>{
                res.json(data)
            })
        } catch (e) {
            res.json(e.message)
        }
    },
    addCategories: async (req, res) => {
        try {
            const category = await Category.create({
                name: req.body.name,
            })
            res.json(category.name + ' > категория добавлена')
        } catch (e) {
            res.json(e.message)
        }
    },
    delCategories: async (req, res) => {
        try {
            const category = await Category.findByIdAndRemove(req.params.id);
            res.json(category)
        } catch (e) {
            res.json(e.message)
        }
    }
}