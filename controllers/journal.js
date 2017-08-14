const express = require('express');
const Journal = require('../models/journal');
const router = express.Router();


router.get("/", (req,res) => {
 Journal.find({}).then((journals) => {
    res.json(journals);
    console.log('HELLO?')
  });
});



module.exports = router;