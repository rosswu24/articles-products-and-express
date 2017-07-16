/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();

router.route('/')


  .post((req, res) => {
    console.log("this is the object: ", req.body);
  });

	module.exports = router;