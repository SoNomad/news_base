const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controller')

const router = Router();

router.post('/categories', categoriesController.addCategories)
router.delete('/categories/:id', categoriesController.delCategories)
router.get('/categories', categoriesController.getCategories)

module.exports = router;