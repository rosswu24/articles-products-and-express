/*jshint esversion: 6*/

const express = require('express');
const router = express.Router();

router.route('/')
	.get((req,res)=>{
		console.log("pinged the route")
		res.end();
	});


router.route('/routes')
	.get((req,res) => {
		console.log('got the yummy food');
		res.end();
	});

	module.exports = router;