//dependencies
const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const passport = require('passport');
const expressSession = require("express-session")({
  secret:"privacy",
  resave:false,
  saveUninitialized:false  
})
const flash = require("connect-flash");
require("dotenv").config();//without it database willnot work

//import user registration model
const Registration = require("./models/Registration")

//import routes
const authRoutes = require('./routes/authRoutes');
const indexRoutes = require('./routes/indexRoutes');
const stockRoutes = require('./routes/stockRoutes');
const salesRoutes = require('./routes/salesRoutes');

//instastiations
const app = express();
const port =3000

//configurations
app.set('view engine', 'pug');//setting up pug as a view egnine
app.set('views', path.join(__dirname, 'views'));//specifying the views directory

//setting up database connections
mongoose.connect(process.env.MONGO_URI);
mongoose.connection
  .once("open",() => {
    console.log("mongoose connection open");
  })

   .on("error",(error) => {
console.error(`connection error:${error.message}`);
   });

   //set view egine to pug

//middleware
app.use(express.urlencoded({extended: false}));
//notifies the system
app.use(expressSession);
app.use(express.static(path.join(__dirname,'public')));
app.use('/public/images/uploads', express.static(__dirname + '/public/images/uploads'));
// app.use(express.urlencoded({extended:true}));

//global variables to be accessed by all views
app.use((req, res, next )=> {
  res.locals.currentUser= req.session.user;
  next();
})
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});
//session middleware
// app.use(
//   session({
//     secret: "security", 
//     resave: false,
//     saveUninitialized: false
//   })
// );

//express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); //flash messages

//passport configuration
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());


//use imported routes
app.use('/', authRoutes);
app.use('/', indexRoutes);
app.use('/', stockRoutes);
app.use('/', salesRoutes);



//handling non existing routes(last route)
app.use((req, res) => {
res.status(404).send('Oops! Route not found.');
});


app.listen(port, () => console.log(`listening on port ${port}`));//should always be the last time
//you only redirect to a route path