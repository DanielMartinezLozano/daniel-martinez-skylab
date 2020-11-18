const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Hero = require('./models/heroModel');
const heroRouter = require('./routes/heroRouter')(Hero);

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/heroesdb');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/boostrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/boostrap/dist/js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'backend/views', 'index.html'));
});

app.use('/heroes', heroRouter);

app.listen(port, () => {
  debug(`Server is running on port ${chalk.green(port)}`);
});
