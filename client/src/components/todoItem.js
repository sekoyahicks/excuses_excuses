import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class todoItem extends Component {
  state = {
    todoItem: [],
    newTodoItem: {
      description: ""
    },
    // istoDoDisplayed: false
  };

  componentDidMount = () => {
    axios.get("/todo").then(res => {
      console.log(res.data);
      this.setState({ todoItem: res.data });
    });
  };

  // toggleTodoItemForm = () => {
  //   this.setState((state, props) => {
  //     return { isTodoItemDisplayed: !state.isTodoItemDisplayed };
  //   });
  // };

    handleChange = (e) => {
      const cloneNewTodoItem = {...this.state.newTodoItem}
      cloneNewTodoItem[e.target.name] = e.target.value
      this.setState({newTodoItem: cloneNewTodoItem})
    }

    createTodoItem = e => {
    e.preventDefault();
    axios
      .post("/todo", {
        name: this.state.newTodoItem.name,
        description: this.state.newTodoItem.description
      })
      .then(res => {
        const todoItemList = [...this.state.todoItem];
        todoItemList.unshift(res.data);
        this.setState({
          newTodoItem: {
            // name: "",
            description: ""
          },
          // isTodoItemDisplayed: false,
          todoItem: todoItemList
        });
      });
  };
  // deleteTodoItem = e
  render() {
    return (
      <div>
        <h1>To-do Item</h1>
        {this.state.todoItem.map(todoItem => {
          return (
            <div key={todoItem._id}>
              <Link to={`/${todoItem._id}`}>{todoItem.description}</Link>
            </div>
          );
        })}
        {/* <button onClick={this.toggleTodoItemForm}>+ New TodoItem</button> */}
        {/* {this.state.isTodoItemDisplayed ? ( */}
          <form onSubmit={this.createTodoItem}>
            {/* <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                // name="name"
                onChange={this.handleChange}
                defaultValue={this.state.newTodoItem.value}
              />
            </div> */}
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.newTodoItem.description}
              />
            </div>
            <button>To-do Item</button>
          </form>
        {/* ) : null} */}
      </div>
    );
  }
}

export default todoItem;
