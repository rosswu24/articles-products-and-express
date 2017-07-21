/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const DS_products = require('../db/products.js');
const app = express();

router.route('/')
  .post((req, res) => {
	DS_products.createNewProduct(req.body);
	res.end();
	})

  .get((req,res) =>{
  	// DS_products.getAllProducts(req.body);
  	res.end();
  });



	module.exports = router;