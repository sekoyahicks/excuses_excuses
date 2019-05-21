import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
// const todoController = require('./controllers/todoController');
// app.use('/', todoController);

// const excuseController = require('./controllers/excuseController');
// app.use('/xcuses', excuseController)

import todoList from './components/todoList.js'
import todoItem from './components/todoItem.js'
import xCusesList from './components/xCusesList.js'
import xCusesItems from './components/xCusesItems.js'
import NavBar from './components/navBar.js'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={todoList}/>
            <Route exact path="/xcuses" component={xCusesList}/>
            <Route path="/:id" component={todoItem}/>
            <Route path="/xcuses/:id" component={xCusesItems}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
