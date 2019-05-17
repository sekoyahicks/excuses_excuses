const express = require('express');
const app = express();
const router = express.Router()
const excusesRoute = require('./routes/excusesRoute')
const todoRoute = require('./routes/todoRoute')
app.use(express.json());

app.use(express.static(`${__dirname}/client/build`));
app.use('/xcuses', excusesRoute)
app.use('/todo', todoRoute)
app.get('/*', (req,res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT);
})