// const express = require('express');
const mongoose = require('mongoose');
const Motoreasy = require('../DB/tyresModel');

// const route = express.Router();
const getTyres = async(req, res) => {
    await Motoreasy.find({}, (err, motoreasy) => {
        if(err) {
            return res.status(400).json({ succes: false, error: err})
        }
        if(!motoreasy.length) {
            return res
            .status(404)
            .json({ succes: false, error: "Tyres not found" })
        }
        return res.status(200).json({ succes: true, data: motoreasy})
    }).catch(err => console.log(err));
}

// route.post('/', async(req, res) => {
//     const{name, size} = req.body;
//     let tyres = {};
//     tyres.name = name;
//     tyres.size = size;
//     let userModel = new Motoreasy(tyres);
//     await userModel.save();
//     res.json(userModel);
// })

module.exports = { getTyres };