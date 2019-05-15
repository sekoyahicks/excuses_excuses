const mongoose = require('../db/connection.js')
const Schema = mogoose.Schema

const TodoItem = new Schema ({
    description: String
})

function getAllTodoItems() {
    return TodoCollection.find()
}

function createNewTodoItem(todo) {
    return TodoCollection.create(todo)
}

function updateTodoItem(todoItemId, todo) {
    return TodoCollection.findByIdAndUpdate(todoId, todo)
}

function deleteTodoItem(todoId) {
    return TodoCollection.findByIdAndDelete(todoId)
}

module.exports = {
    getAllTodoItems,
    createNewTodoItem,
    updateTodoItem,
    deleteTodoItem
}

module.exports = mongoose.model('TodoITem', TodoItem)