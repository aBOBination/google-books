const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Calls out to Google Books API and returns books matching query
router.get('/recipes', (req, res) => {
  axios
    .get('https://www.googleapis.com/books/v1/volumes?', {
      params: req.query
    })
    .then(({ data: { results } }) => res.json(results))
    .catch((err) => res.status(422).json(err));
});

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
