const express = require('express');

const { check } = require('express-validator')

const newsController = require('../controller/news-controller');


const router = express.Router()


router.get('/', newsController.getNews);
router.get('/:nid', newsController.getNewsById);
router.post(
  '/', 
    [
      check('title')
        .not()
        .isEmpty(),
      check('content')
        .not()
        .isEmpty()
        .isLength({ min: 10}),
    ], 
  newsController.createNews
);
router.patch('/:nid', newsController.updateNews);
router.delete('/:nid', newsController.deleteNews)


module.exports = router;