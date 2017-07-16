/*jshint esversion: 6*/

const articles = require('db/articles.js');
const router = express.Router();

articles.all();

articles.add({'...'}) // need to add object inside

articles.getByTitle('hi') // need to add titles that would need to get 

articles.editByTitle('edit title', {title: '....'});

