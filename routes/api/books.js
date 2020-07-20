const router = require('express').Router();
const axios = require('axios');
const booksController = require('../../controllers/booksController');

// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);
router.get('/', (req, res) => {
  axios
    .get('https://www.googleapis.com/books/v1/volumes?q=' + req.query.q)
    .then(({ data: { items } }) => {
      res.json(items);
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
