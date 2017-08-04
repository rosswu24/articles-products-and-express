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
	// console.log(DB_products);
	const itemId = Number(req.params.id);
		DB_products.getProductById(itemId);
		res.end();
	})

  .delete((req,res) => {
	const itemId = Number(req.params.id);
	DB_products.deleteById(itemId);
	res.end();
  })

	.put((req,res)=>{
		const itemId = Number(req.params.id);
    const newName = req.body.name;
    const newPrice = req.body.price;
    const newCount = req.body.inventory;

		DB_products.editById(itemId, newName, newPrice, newCount);
		res.end();
	});


	module.exports = router;