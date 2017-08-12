//require("dotenv")//
require("dotenv").config();
//import mongoose//
var mongoose = require('mongoose');
//tell mongoose to connect to the env//
mongoose.connect(process.env.MONGOD_URI);
//import models//
var Board = require('.../models/board');
var Journal = require('.../models/journal');
var User = require('.../models/user');
//use native promises//

mongoose.Promise = global.Promise;
//create//
Board.remove({}, (err) => console.log(err));
Journal.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));

const DailyOne = new Entry ({
  journal: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 1,
});
const DailyTwo = new Entry ({
  journal: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 3,
});
const DailyThree = new Entry ({
  journal: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 2,
});
const DailyFour = new Entry ({
  journal: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 4,
});
const DailyFive = new Entry ({
  journal: "Got me thinking about the beginning of my recovery. The last few months of using. The first few months of being clean. The white knuckling, hardcore, mundane sweat and tears and boredom of it all.",
  meter: 5,
});

//save:  ---.save().then(() =>   game.save().then(() => //
board.save().then(() => console.log("Board Saved!"))
journal.save().then(() => console.log("Journal Saved!"))
user.save().then(() => console.log("User Saved!"))

//test console.log("---saved!")//


mongoose.connection.close();


//mongoose.connection.close();//

//run node db/seeds.js//