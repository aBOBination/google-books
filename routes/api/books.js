const router = require('express').Router();
const axios = require('axios');
const booksController = require('../../controllers/booksController');

// Matches with "/api/books/search"
router.route('/search').get(booksController.searchBook);

// Matches with "/api/books"
router.route('/').get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
