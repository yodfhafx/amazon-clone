const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');
const app = express();

// Mongoose Connect
mongoose.connect(config.database, {useNewUrlParser: true}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});
mongoose.set('useCreateIndex', true)

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/account');
app.use('/api/accounts', userRoutes);


app.listen(config.port, err => {
  console.log('server run at port: ' + config.port);
});
