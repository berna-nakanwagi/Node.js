//dependencies
const express = require('express');

//instantiations
const app = express();

//configurations

//middleware(use)
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});//it prints time

// To parse URL encoded data
app.use(express.urlencoded({ extended: false }));//if you  donot have it, there willnot be action

// //Simple request time logger for a specific route
// app.use('/home', (req, res, next) => {
//   console.log('A new request received at ' + Date.now());
//   next();
// });


//routing(get,post,delete)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});

// app.get('/', (req, res) => { // new
//   res.send('Homepage! Hello world.');
// });

app.get('/about', (req, res) => { // new
  res.send('About page. Nice.');
});

app.post('/user', (req, res) => {
  res.send('user added');
});

app.put('/user', (req, res) => {
  res.send('user updated');
});

app.delete('/user', (req, res) => {
  res.send('user deleted');
});

//path parameters
app.get('/users/:name',(req, res) => {
  res.send( req.params.name + ' is returned from the database ')
})

//querryparameters
app.get('/students', (req, res) => {
  res.send('you searched for: ' + req.query.name + 'from' + req.query.class + 'in' + req.query.cohort )
})

//handling non existing routes(last route)
app.use((req, res) => {
res.status(404).send('Oops! Route not found.');
});

//bootstrapping the server
app.listen(3000, () => console.log('listening on port 3000'));//should always be the last time