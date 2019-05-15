const express = require('express');
const app = express();
const express = require('express')
const router = express.Router()

const todoList = require('../controllers/Controller')
app.use(express.json());
app.get('/', (req,res) => {
    res.send('Hello world!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT);
})