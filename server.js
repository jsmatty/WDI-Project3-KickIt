require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const JournalController = require ('./controllers/journal');
const EntryController = require ('./controllers/entry');
const UsersController = require ('./controllers/user');

const app = express();


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); 


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());
app.use('/api/journal', JournalController);
app.use('/api/entry', EntryController);
app.use('/api/users', UsersController);


 app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})
