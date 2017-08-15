const express = require('express');
const SignUp = require('../models/SignUp');
const User = require('../models/User');
const router = express.Router();


router.get("/", (req,res) => {
 SignUp.find({}).then((signUps) => {
    res.json(signUps);
    console.log('HELLO?')
  });
});

router.put("/login", (req, res) => {
  //save username and password
  const username = req.body.username;
  const password = req.body.password;
  //grab users from database
 //return a list of users,
 user.find().then((users) => {
 
 //using list find one. username matches their username.
 const someUser = 
  user.find().then((user) => {
    return user.username === username
 })
 if (userOne.password=== password)
    res.json(someUser)
 });
 //then match passwords(===)
 //if passwords match
 //send Login Successful
}
) 

module.exports = router;