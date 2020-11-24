const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Hero = require('./src/models/heroModel');
const heroRouter = require('./src/routes/heroRouter')(Hero);

const app = express();
const port = process.env.PORT || 5000;
const endpoints = [{ methods: ['GET', 'PUT'], url: '/' }];

mongoose.connect('mongodb://localhost/heroesdb', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('tiny'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));

app.get('/', (req, res) => {
  res.render('index', { endpoints });
});

app.use('/heroes', heroRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.blue(port)}`);
});
