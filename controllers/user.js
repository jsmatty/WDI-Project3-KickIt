const express = require('express');
const User = require('../models/User');
const router = express.Router({mergeParams: true});



router.get('/', (req,res) => {
    User.find().then((Users) => {
        res.json(Users)
    }).catch(err => console.log(err))
});

router.get('/:userId', (req,res)=> {
    User.findById(req.params.userId).then((user) => {
        res.json(user);
    }).catch(err => console.log(err))
})



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




router.patch('/:userId', (req,res) => {
    User.findByIdAndUpdate(req.body._id, req.body).then((user)=>{
       
        console.log('success!')
        res.json(user);
        user.save();
    }).catch((err) => {
        console.log(err);
    })
})

router.delete('/:userId', (req,res) =>{
    User.delete(req.params.userId).then((user) => {
        console.log('success');
        res.send(200)
    }).catch((err) => {
        console.log(err)
    })
})



module.exports = router;