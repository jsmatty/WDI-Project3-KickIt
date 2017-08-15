const express = require('express');
const Entry= require('../models/entry');
const router = express.Router();


router.get("/", (req,res) => {
 Entry.find({}).then((entries) => {
    res.json(entries);
    console.log('HELLO?')
  });
});


router.post("/", (req, res) => {
  const entry = new Entry({
    content: req.body.content,
    meter: req.body.meter
  });
entry.save().then((entry) => {
    console.log("Success!");
    res.json(entry);
  });
})

module.exports = router;