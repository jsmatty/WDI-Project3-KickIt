//var mongoose = require('mongoose');
const mongoose = require ('mongoose');
//var Schema = mongoose.Schema;

//created variables = new schema
const boardSchema = mongoose.Schema({
  articles: [String],
  images: Image,
});
const journalSchema = mongoose.Schema ({
  dailyEntry: String,
  meter: Number,
  weeklyGoal: String,
  monthlyAccomplishments: String
});
const userSchema = mongoose.Schema ({
  name: String,
  email: String,
  username: String,
  password: String,
  age: Number,
  addiction: String,
});
// Use native promises
//mongoose.Promise = global.Promise;
//variableName.pre('save', function(next) {
//})
//set variables equal to mongoose.model("", varName)
const Board = mongoose.model('Board', boardSchema);
const Journal = mongoose.model('Journal', journalSchema);
const User = mongoose.model('User', userSchema);
//module.exports = {
module.exports = {
  Board, Journal, User
}