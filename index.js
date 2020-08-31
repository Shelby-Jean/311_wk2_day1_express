
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;

const { users } = require('./state');

/* BEGIN - create routes here */

//GET /users
app.get('/users', (req, res)=> {
  res.json(users);
});

//GET /users/1
app.get('/users/1', (req, res) => {
  res.json(users.filter(user => user._id == 1));
});

//POST /users
app.post('/users', (req, res) => {
  const newUser = {
    _id: 6,
    name: "Chuck Bartowski",
    occupation: "Spy",
    avatar: "https://dvdbash.files.wordpress.com/2012/04/chuck_strahovski_lancaster_levi_baldwin_gomez_sahay_krinsky_mcpartlin_lawrence_dvdbash_072.jpg"
  }
  users.push(newUser);
  res.json(users);
});

//PUT /users/1
app.put('/users/1', (req, res) => {
  // const found = users.some(user => user.id === parseInt(req.params.id));

})

//DELETE /users/1
app.delete('/users/1', (req, res) => {
  // res.json(users.filter(user => user._id == 1));
  res.send('deleted');
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`));