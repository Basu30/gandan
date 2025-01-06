const express = require('express');

const newsController = require('../controller/news-controller');


const router = express.Router()


router.get('/', newsController.getNews);
router.get('/:nid', newsController.getNewsById);
router.post('/', newsController.createNews);
router.patch('/:nid', newsController.updateNews);
router.delete('/:nid', newsController.deleteNews)


module.exports = router;