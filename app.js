const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const tripRoutes = require('./routes/tripRoutes');
const config = require('./config');

const app = express();

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
function abc(req,res,next){
  console.log("xyz")
  next()
}
function a(req,res,next){
  console.log("p")
  next()
}
app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth',a, authRoutes);
app.use('/api/trips',abc, tripRoutes);

module.exports = app;
