const express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
     res.send("Hello node mailer") 
  });

module.exports = router;
