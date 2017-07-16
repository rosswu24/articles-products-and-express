/*jshint esversion: 6*/

const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 3000;


const server = app.listen(PORT, ()=>{
	console.log(`server running on ${PORT}`);
});