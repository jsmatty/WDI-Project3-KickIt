const express = require('express');
const Board = require('../models/Board');
//const MotivationalBoard = require('../models/MotivationalBoard');
const router = express.Router();

router.get("/", (req, res) => {
  Board.find({}).then(boards) => {
    res.json(boards);
    console.log('Hi There!')
  });


router.post("/", (req, res) => {
  const Thumb = new Board ({
    content: req.body.content,
    //meter: req.body.meter
  });