

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class todoItem extends Component {
  state = {
    todoItem: {}
  };

  componentDidMount = () => {
    axios.get(`/todo/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({ todoItem: res.data });
    });
  };

  // toggletodoList = () => {
  //   this.setState((state, props) => {
  //     return { isTodoListDisplayed: !state.isTodoListDisplayed };
  //   });
  // };

  // //   handleChange = (e) => {
  // //     const cloneNewCreature = {...this.state.newCreature}
  // //     cloneNewCreature[e.target.name] = e.target.value
  // //     this.setState({newCreature: cloneNewCreature})
  // //   }

  // createTodoList = e => {
  //   e.preventDefault();
  //   axios
  //     .post("/todo", {
  //       name: this.state.newTodoList.name,
  //       description: this.state.newTodoList.description
  //     })
  //     .then(res => {
  //       const todoItemList = [...this.state.todoList];
  //       todoItemList.unshift(res.data);
  //       this.setTodoList({
  //         newTodoList: {
  //           name: "",
  //           description: ""
  //         },
  //         isTodoListDisplayed: false,
  //         todoList: todoList
  //       });
  //     });
  // };

  render() {
    return (
      <div>
        <h1>todoItem</h1>
        <div>{this.state.todoItem.description}</div>
        {/* {this.state.todoList.map(todoList => {
          return (
            <div key={todoList._id}>
              <Link to={`/${todoList._id}`}>{todoList.description}</Link>
            </div>
          );
        })}
        <button onClick={this.toggleTodoListForm}>+ New TodoList</button>
        {this.state.isTodoListDisplayed ? (
          <form onSubmit={this.todoList}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.newTodoList.name}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.newTodoList.description}
              />
            </div>
            <button>TodoList</button>
          </form>
        ) : null} */}
      </div>
    );
  }
}


export default todoItem;

