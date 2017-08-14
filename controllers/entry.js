const express = require('express');
const Entry= require('../models/entry');
const router = express.Router();



router.post("/", (req, res) => {
  const content = req.body.content.map(content => {
    return new Entry(content);
  });
  const entry = new Entry({
    content: req.body.entry
   // meter 
  });
entry.save().then((entry) => {
    console.log("Success!");
    res.json(entry);
  });
})

module.exports = router;