const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');

const route = express.Router();

route.get('/', async(req, res) => {
    const{name, lastName} = req.body;
    let user = {};
    user.name = name;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;