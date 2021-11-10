var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var plantRouter = require('./routes/plant');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var Plant = require("./models/plant");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plant', plantRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const connectionString =  process.env.MONGO_CON 

mongoose = require('mongoose'); 
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}); 

async function recreateDB(){
  // Delete everything
  //await Plant.deleteMany();
 
 
  var results = [{"type":"Palm","name":'Caranday',"cost":30},
                 {"type":"Aquatic","name":'Water Hawthorn',"cost":25},
                 {"type":"Palm", "name":'Chestnut',"cost":15}]
 
 for(i in results){
   let instance = new Plant({type: results[i]["type"], name: results[i]["name"], cost:results[i]["cost"]});
   instance.save( function(err,doc) {
     if(err) return console.error(err);
     console.log("object added.")
     });
 }
 
 }
 
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;
 
var db = mongoose.connection; 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
console.log("Connection to DB succeeded")});  
