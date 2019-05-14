const express = require('express')
const app = express()
const methodOverride = require('method-override')
const  = require('.excuses_excuses/todo.js')
const userApi = require('./api/userApi.js')

// Register middleware...

//...for decoding body as js object
app.use(express.urlencoded())

//...for "faking" DELETE and PUT/PATCH requests
app.use(methodOverride('_method'))

//add middleware for handlebars here
app.set('view engine', 'hbs')
app.use(express.static(__dirname+"/public"))

app.get("/users", (req, res) => {
  userApi.getUsers()
    .then(users => {
      res.render('users/users', { users });
    });
});
//keep these lines at the bottom of the file
const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})