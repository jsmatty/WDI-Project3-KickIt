require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const JournalController = require ('./controllers/journal.js');
const app = express();

// const UserController = require ('./controllers/user');
// const BoardController = require ('./controllers/board');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/fullstack-jeopardy


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());
app.use('/api/journal', JournalController);
// app.use('/api/user', UserController);
// app.use('/api/board', BoardController);


app.get('/', (req,res) => {
  res.send('Hello world!')
});

 app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})
