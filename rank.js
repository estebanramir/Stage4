'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankSchema = new Schema({
    name: String,
    movie: String,
    rating: Number
})
module.exports = mongoose.model('Rank', RankSchema)