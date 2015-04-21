'use strict';

var express = require('express');
var controller = require('./blog.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/comments', controller.showComment);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/:id/comments', controller.comment);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
