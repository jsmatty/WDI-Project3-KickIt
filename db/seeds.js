//require("dotenv")//
require("dotenv").config();
//import mongoose//
var mongoose = require('mongoose');
//tell mongoose to connect to the env//
mongoose.connect('mongodb://localhost/kick-it');
//import models//
var Board = require('../models/board');
var Entry = require('../models/entry');
var User = require('../models/user');
//use native promises//

mongoose.Promise = global.Promise;

//create//
// Board.remove({}, (err) => console.log(err));
Entry.remove({}, (err) => console.log(err));
// User.remove({}, (err) => console.log(err));

const DailyOne = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 1
});
const DailyTwo = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 3
});
const DailyThree = new Entry({
  content: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
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

//save:  ---.save().then(() =>   game.save().then(() => //
DailyOne.save().then(() => console.log("Board Saved!"))
DailyTwo.save().then(() => console.log("Board Saved!"))
DailyThree.save().then(() => console.log("Board Saved!"))
DailyFour.save().then(() => console.log("Board Saved!"))
DailyFive.save().then(() => console.log("Board Saved!"))
// Entrysave().then(() => console.log("EntrySaveFour!"))
// User.save().then(() => console.log("User Saved!"))

//test console.log("---saved!")//


mongoose.connection.close();


//mongoose.connection.close();//

//run node db/seeds.js//