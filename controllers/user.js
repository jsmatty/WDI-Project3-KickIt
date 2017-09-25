const express = require('express');
const User = require('../models/user');
const router = express.Router({mergeParams: true});



//Get List of Users
router.get('/', (req,res) => {
    User.find().then((Users) => {
        res.json(Users)
    }).catch(err => console.log(err))
});

//User's individual show page
router.get('/:userId', (req,res)=> {
    User.findById(req.params.userId).then((user) => {
        res.json(user);
    }).catch(err => console.log(err))
})



//Create a new user
router.post('/', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const age = req.body.age;
    const addiction = req.body.addiction;

    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.username = username;
    newUser.password = password;
    newUser.age = age;
    newUser.addiction = addiction;

    newUser.save().then((user)=>{
        res.json(user);
    }).catch((err)=> {
        console.log(err)
    })
});



//Edit User
router.put('/:userId', (req,res) => {
    User.findByIdAndUpdate(req.body._id, req.body).then((user)=>{
       
        console.log('success!')
        res.json(user);
    }).catch((err) => {
        console.log(err);
    })
})

//Delete User
router.delete('/:userId', (req,res) =>{
    User.findByIdAndRemove(req.params.userId).then((user) => {
        console.log('success');
        res.send(200)
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;