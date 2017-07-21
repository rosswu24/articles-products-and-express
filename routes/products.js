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
  DS_products.getAllProducts(req.body);
  	res.end();
  })

 	.get('/products/:id', (req,res)=>{
 		// DS_products.getProductById(req.param.id);
 		console.log(req.params.id);
 		res.end();
 	});



	module.exports = router;