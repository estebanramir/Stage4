'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankSchema = new Schema({
    user: String,
    movie: String,
    rating: Number
})
module.exports = mongoose.model('Rank', RankSchema)