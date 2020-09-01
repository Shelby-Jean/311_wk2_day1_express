
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;

const { users } = require('./state');

app.use(bodyParser.json());

/* BEGIN - create routes here */

//GET /users
app.get('/users', (req, res)=> {
  res.json(users);
});

//GET /users/1
app.get('/users/:userId', (req, res) => {
  let person = users.filter(user => user._id === parseInt(req.params.userId));
  res.json(person);
});

//POST /users
app.post('/users', (req, res) => {
  // let counter = users.length + 1;

  // const newUser = {
  //   _id = counter,
  //   name = req.body.name,
  //   ocupation = req.body.ocupation,
  //   avatar = req.body.avatar
  // }

  // users.push(newUser);
  users.push(req.body);
  res.json(users);
});

//PUT /users/1
app.put('/users/:userId', (req, res) => {
  let person = users.filter(user => user._id === parseInt(req.params.userId));

  if(person){
    users.forEach(user => {
      if(user._id === parseInt(req.params.userId)){
        user.name = req.body.name;
        res.json(user);
      }
    })
  }
});

//DELETE /users/1
app.delete('/users/:userId', (req, res) => {
  let person = users.filter(user => user._id === parseInt(req.params.userId));
  res.json(person);
  res.send("deleted");
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`));