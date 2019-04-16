const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const app = express();

// Map global promises
mongoose.Promise = global.Promise;

// Mongoose Connect
mongoose.connect(config.database, {useNewUrlParser: true}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {
  res.json({
    user: "manee siriwan"
  });
});

app.listen(config.port, err => {
  console.log('server run at port: ' + config.port);
});
