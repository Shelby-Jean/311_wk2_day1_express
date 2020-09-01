
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;

const { users } = require('./state');

app.use(bodyParser.json());

/* BEGIN - create routes here */

//GET /users
app.get('/users', (req, res)=> res.json(users));

//GET /users/1
app.get('/users/:userId', (req, res) => {
  let found = users.some(user => user._id === parseInt(req.params.userId));

  if(found) {
    res.json(users.filter(user => user._id === parseInt(req.params.userId)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.userId}.` });
  }
});

//POST /users
app.post('/users', (req, res) => {
  let counter = users.length + 1;
  let newUser = req.body;
  newUser._id = counter;
  // newUser = {
  //   _id = counter,
  //   name = req.body.name,
  //   ocupation = req.body.ocupation,
  //   avatar = req.body.avatar
  // }

  users.push(newUser);
  res.json(users);
});

//PUT /users/1
app.put('/users/:userId', (req, res) => {
  let found = users.some(user => user._id === parseInt(req.params.userId));

  if(found){
    users.forEach(user => {
      if(user._id === parseInt(req.params.userId)){
        user.name = req.body.name;
        user.ocupation = req.body.ocupation;
        user.avatar = req.body.avatar;
        res.json(user);
      }
    })
  }
});

//DELETE /users/1
app.delete('/users/:userId', (req, res) => {
  let found = users.some(user => user._id === parseInt(req.params.userId));

  if(found){
    users.forEach(user => {
      if (user._id === parseInt(req.params.userId)) {
        user.isActive = false;
        res.json(user);
      }
    })
  }

  res.send("deleted");
});

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`));