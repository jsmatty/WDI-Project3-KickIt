const express = require('express');
const Entry= require('../models/entry');
const router = express.Router();
const Journal = require('../models/journal');

router.get("/", (req,res) => {
 Entry.find({}).then((entries) => {
    res.json(entries);
    console.log('HELLO?')
  });
});


router.post("/:id", (req, res) => {
  const entry = new Entry({
    content: req.body.content,
    meter: req.body.meter
  });
  Journal.findById(req.params.id).then( (journal) => {
    journal.dailyEntry.push(entry);
    journal.save().then((entry) => {
      console.log("Success!");
      res.json(entry);
  }).catch( (err) => console.log(err))
  });
})

module.exports = router;