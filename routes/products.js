/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const DB_products = require('../db/products.js');
const app = express();

router.route('/')
  .post((req, res) => {
	DB_products.createNewProduct(req.body);
	res.end();
	})

  .get((req,res) => {
  DB_products.getAllProducts(req.body);
  	res.end();
  });

 	router.route('/:id')
 	.get((req,res) => {
 		DB_products.getProductById(req.body);
 		res.end();
 	});

  // .put((req,res) => {
  //   DB_products.getProductById()
  // });



	module.exports = router;