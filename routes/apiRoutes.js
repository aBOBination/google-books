const axios = require('axios');
const router = require('express').Router();

// router.get('/recipes', (req, res) => {
//   axios
//     .get('http://www.recipepuppy.com/api/', { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch((err) => res.status(422).json(err));
// });

router.get('/recipes', (req, res) => {
  axios
    .get('https://www.googleapis.com/books/v1/volumes?q=HarryPotter')
    .then(({ data: { items } }) => {
      console.log(items);
      res.json(items);
    })
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
