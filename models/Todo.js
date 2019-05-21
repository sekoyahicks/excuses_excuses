const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const TodoItem = new Schema ({
    description: String,
    // item: ObjectId
})

module.exports = mongoose.model('TodoItem', TodoItem)