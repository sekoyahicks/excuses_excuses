import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import todoList from './components/todoList'
import todoItem from './components/todoItem.js'
// import xCusesList from './components/xCusesList'
import xCusesItems from './components/xCusesItems'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={todoList}/>
            <Route path="/todo" component={todoItem}/>
            {/* <Route exact path="/" component={xCusesList}/> */}
            <Route path="/xcuses" component={xCusesItems}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
