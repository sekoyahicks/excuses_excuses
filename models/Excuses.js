const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const ExcusesList = new Schema ({
    description: String
})

//We don't need this anymore because we are exporting the ExcusesList directly
// function getAllExcuses() {
//     return ExcusesCollection.find()
// }

// function createNewExcuse(excuses) {
//     return ExcusesCollection.create(excuses)
// }

// function updateExcuse(excusesId, excuses) {
//     return TodoCollection.findByIdAndUpdate(excusesId, excuses)
// }

// function deleteExcuse(excusesId) {
//     return ExcusesCollection.findByIdAndDelete(excusesId)
// }

// // module.exports = {
// //     getAllExcuses,
// //     createNewExcuse,
// //     updateExcuse,
// //     deleteExcuse
// // }

module.exports = mongoose.model('ExcusesList', ExcusesList)