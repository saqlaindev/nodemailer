var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "akhtar.tarar112@gmail.com",
    pass: "030280901002",
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello")
  // res.json("Hello")
  var mailOptions = {
    from: 'akhtar.tarar112@gmail.com',
    to: 'maliksaqlainm308@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  // var mailOptions = {
  //   from: 'akhtar.tarar112@gmail.com',
  //   to: req.body.toMain,
  //   subject: req.body.subject,
  //   text: req.body.text
  // };
  
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.json(info.response)
    }
  });
  
});

module.exports = router;
