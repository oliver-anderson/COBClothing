/*//import modules
var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

//define port number
const port = 3000;

//define routes location
const route = require('./routes/route');

//use middleware
app.use(bodyparser.json());
app.use(cors());

//use static index.html location
app.use(express.static(path.join(__dirname, 'public')));

//use routes location
app.use('/api', route);

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/COBClothing');
mongoose.connection.on('connected',()=>{
  console.log('Connected to database MongoDB @ 27017');
});
mongoose.connection.on('error',()=>{
  if(err){
    console.log('Error in database connection:'+err);
  }
});

//test/run server
app.get('/',(req, res)=>{
  res.send('foobar');
});

require('./routes/cart.routes')(app, {});

app.listen(port,()=>{
  console.log('Server started at port: '+port);
});*/
