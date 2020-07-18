const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Matches with "/api/books"
router.route('/').get(booksController.findAll).post(booksController.create);

// Calls out to Google Books API and returns books matching query
router.get('/search', (req, res) => {
  console.log(req.params.query);
  axios
    .get('https://www.googleapis.com/books/v1/volumes?q=' + req.params.query)
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => res.status(422).json(err));
});

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
