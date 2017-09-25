const express = require('express');
const Entry= require('../models/Entry');
const router = express.Router();
const Journal = require('../models/Journal');


router.get("/", (req,res) => {
 Entry.find({}).then((entries) => {
    res.json(entries);
    console.log('HELLO?')
  });
});




router.post("/:id", (req, res) => {
  console.log('This is POST');
  const entry = new Entry({
    content: req.body.content,
    time: new Date()
    // meter: req.body.meter
  })

  // router.update("/:id", (re, res) => {
  //   const dailyEntry = Journal[0];
  //   console.log(dailyEntry);
  //   Journal.findByIdAndUpdate(dailyEntry.id).then((entry) => {
  //     res.send("successfully updated");
  //   })
  // })

  Journal.findById(req.params.id).then( (journal) => {
    journal.dailyEntry.push(entry);
    journal.save().then((entry) => {
      console.log("Success!");
      res.json(entry);
    }).catch( (err) => console.log(err))
  })
})

router.put("/:id", (req, res) => {
  console.log('UPDATE');
    const dailyEntry = Journal[0];
    console.log(dailyEntry);
    Entry.findByIdAndUpdate(req.params.entryId, {
      content: req.body.content
    }).then((entry) => {
      res.json(entry)
      res.send("successfully updated");
    })
      Journal.findById(req.params.id).then( (journal) => {
      journal.dailyEntry.push(entry);
      journal.save().then((entry) => {
        console.log("Success!");
        res.json(entry);
      }).catch((err) => console.log(err))
    })
  })

//note to self, get things from array of objects within array of objects
router.delete("/:id", (req,res) => {
  const dailyEntry = Journal[0];
  console.log(dailyEntry);
  Journal.findByIdAndRemove(dailyEntry.id).then((entry) => {
    res.send("Successfully deleted");
  })
})
// router.delete("/:id", (req,res) => {
//   Journal.findOneAndRemove({_id: req.params.id}).then((entry) => {
//     res.send("Successfully deleted");
//   })
//   .catch(err => console.log(err));
// });



module.exports = router;