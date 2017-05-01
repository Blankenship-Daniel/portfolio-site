// Import dependencies
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.json('api works');
});

module.exports = router;
