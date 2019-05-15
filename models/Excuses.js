const mongoose = require('../db/connection.js')
const Schema = mogoose.Schema

const ExcusesList = new Schema ({
    description: String
})

function getAllExcuses() {
    return ExcusesCollection.find()
}

function createNewExcuse(excuses) {
    return ExcusesCollection.create(excuses)
}

function updateExcuse(excusesId, excuses) {
    return TodoCollection.findByIdAndUpdate(excusesId, excuses)
}

function deleteExcuse(excusesId) {
    return ExcusesCollection.findByIdAndDelete(excusesId)
}

module.exports = {
    getAllExcuses,
    createNewExcuse,
    updateExcuse,
    deleteExcuse
}

module.exports = mongoose.model('ExcusesList', ExcusesList)