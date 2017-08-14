//var mongoose = require('mongoose');
const mongoose = require ('mongoose');
//var Schema = mongoose.Schema;

//created variables = new schema
const boardSchema = mongoose.Schema({
  articles: [String],
  images: String
});

const entrySchema = mongoose.Schema({
  content: String,
  meter: Number,
})
const journalSchema = mongoose.Schema ({
  dailyEntry: {entrySchema},
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
const Entry = mongoose.model('Entry', entrySchema);
//module.exports = {
module.exports = {
  Board, Journal, User, Entry
}