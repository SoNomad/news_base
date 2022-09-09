const { Router } = require('express');
const { newsController } = require('../controllers/news.controller')
const router = Router();

router.post('/news', newsController.addNews)
router.delete('/news/:id', newsController.deleteNewsById)
router.patch('/news/:id', newsController.editNewsById)
router.get('/news/:id', newsController.getNewsById)
router.get('/news', newsController.getNews)
router.get('/news/category/:id', newsController.getNewsByCat)

module.exports = router;