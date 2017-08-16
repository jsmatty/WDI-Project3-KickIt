//require("dotenv")//
require("dotenv").config();
//import mongoose//
var mongoose = require('mongoose');
//tell mongoose to connect to the env//
mongoose.connect(process.env.MONGODB_URI);
//import models//
var Board = require('../models/Board');
var Entry = require('../models/Entry');
var User = require('../models/User');
var Journal = require('../models/Journal')
//use native promises//

mongoose.Promise = global.Promise;

//create//
Board.remove({}, (err) => console.log(err));
Entry.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));
Journal.remove({}, (err) => console.log(err));

const DailyOne = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  time: new Date()
});
const DailyTwo = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 3
});
const DailyThree = new Entry({
  content: "Addictedtohiding - I just want to let you know, this is in part for you. Because I know where you are. In between place where you know what you are doing and what you have to do. The pain, the guilt, the selfishness in it. The terrified, unrelenting fear in it. I understand. And if knowing just one person has been there, maybe your stay in this place will be shorter than it could be. Following are some journal entries from a few years ago."
,
  meter: 2
});
const DailyFour = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 4
});
const DailyFive = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 5
});

const JournalOne = new Journal({
  dailyEntry: [DailyOne, DailyTwo, DailyThree, DailyFour, DailyFive],
  weeklyGoal: "Make lots of entries",
  monthlyAccomplishments: "Do things"
})

//save:  ---.save().then(() =>   game.save().then(() => //
// DailyOne.save().then(() => console.log("Board Saved!"))
// DailyTwo.save().then(() => console.log("Board Saved!"))
// DailyThree.save().then(() => console.log("Board Saved!"))
// DailyFour.save().then(() => console.log("Board Saved!"))
// DailyFive.save().then(() => console.log("Board Saved!"))
JournalOne.save().then(() => console.log('Journal One saved'));
// Entrysave().then(() => console.log("EntrySaveFour!"))
// User.save().then(() => console.log("User Saved!"))

//test console.log("---saved!")//


mongoose.connection.close();


//mongoose.connection.close();//

//run node db/seeds.js//