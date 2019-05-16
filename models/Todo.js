const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const TodoItem = new Schema ({
    description: String
})

module.exports = mongoose.model('TodoITem', TodoItem)