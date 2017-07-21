/*jshint esversion: 6*/

const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();


// const articleRoute = require('./routes/articles.js');
const productsRoute = require('./routes/products.js');
const dbRoute = require('./db/products.js');

const PORT = process.env.PORT || 3000;

// create handlebars instance and store in var
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: 'main'
});

// invoke exphbs; takes in obj configuration
app.engine('hbs', hbs.engine);

// use the handlebars engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());

// app.use('/products', dbRoute);
app.use('/products', productsRoute);

app.get('', (req, res) => {
  console.log("this is the name of the product: ", req);
});

app.get('/products/:id', (req, res) => {
  console.log("ID: " + req.params.id);
});

// make server listen for data
const server = app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});