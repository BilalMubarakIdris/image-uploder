
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
// Schema
const itemSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    }
},{timestamps: true})

const Item = mongoose.model('Items', itemSchema)

module.exports = Item