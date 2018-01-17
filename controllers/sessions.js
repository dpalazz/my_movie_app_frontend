const express = require('express');
const router = express.Router();

// ==============
// MIDDLEWARE
// ==============

router.use(express.urlencoded({ extended: false}));
router.use(express.json());
router.use(express.static('public'));


// ==============
// ROUTES
// ==============

router.get('/', (req, res) => {
  console.log("test");
  console.log(req.session.user);
  res.send(req.session.user);

 
});

router.post('/', (req, res) => {
  console.log(req.body)
  req.session.user = req.params.id;
});


module.exports = router;
