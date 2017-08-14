const express = require('express');
const Journal = require('../models/journal');
const router = express.Router();


router.get("/", (req,res) => {
 Journal.find({}).then((journals) => {
    res.json(journals);
    console.log('HELLO?')
  });
});

// router.post("/", (req, res) => {
//   const questions = req.body.questions.map(question => {
//     return new Question(question);
//   });
//   constJournal = newJournal({
//     name: req.bodyJournal,
//     questions
//   });
// Journal.save().then(Journal) => {
//     console.log("Success!");
//     res.jsonJournal);
//   });
// })

module.exports = router;