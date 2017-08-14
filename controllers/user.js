const express = require('express');
const User = require("../models/user");
const router = express.Router();


//this needs to be secured in the future.
router.get("/", (req, res) => {
    User.find().then((users) => {
        res.json(users);
    });
});

router.get("/:id", (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user);
    });
});

router.put("/:id/password", (req, res) => {
    const newPassword = req.body.newPassword;
    const oldPassword = req.body.oldPassword;
    User.findByIdAndUpdate(req.params.id).then((user) => {
        if(user.password === oldPassword){
            user.password = newPassword;
            user.save();
            res.send("password saved");
            consle.log(`user: ${user.username} updated their password`);
        } else {
            res.send("password incorrect");
        }
    }).catch((err) => {
        console.log(err);
    });
});

router.get("/:id/delete", (req, res) => {
    const userId = req.params.id;
    User.findByIdAndRemove(userId).then(() => {
        res.send("success");
    }).catch((err) => {
        console.log(err);
    })
})
router.post("/login/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.find().then((users) => {
        const userIWant = users.find((user) => {
            return user.username === username;
        });
        if (userIWant.password === password){
            res.json(userIWant);
        } else {
            res.send("Sorry, You have entered the wrong password");
        }
        res.json(userIWant);
    })
        .catch((err) => {
            res.send("Sorry, You have an entered an invalid username");
        })
})
router.post("/sign_up", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User();
    newUser.firstName = "";
    newUser.lastName = "";
    newUser.email = "";
    newUser.username = username;
    newUser.password = password;
    newUser.addiction = "";


    newUser.save().then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err);
    });
})

module.exports = router;