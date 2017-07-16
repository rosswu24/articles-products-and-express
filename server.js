/*jshint esversion: 6*/

const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const app = express();
const articleRoute = require('./routes/article.js');
const productsRoute = require('./routes/products.js');


const PORT = process.env.PORT || 3000;

app.use('/routes', articleRoute);

app.use('/routes', productsRoute);

const server = app.listen(PORT, ()=>{
	console.log(`server running on ${PORT}`);
});