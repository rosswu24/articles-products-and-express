/*jshint esversion: 6*/
const express = require('express');
const router = express.Router();
const items = [];

router.route('/')


  .post((req, res) => {
	// console.log("this is the object: ", req.body);

function makeItem(){

		for(var i = 0; i < items.legnth; i++){
				var itemId= req.body['id'] = i;
				console.log(itemId);
				items.push(req.body);
				console.log(items);
			}
}
	makeItem();
			res.end();

		  });



	module.exports = router;