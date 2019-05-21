import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: lavender;

    h1 {
      font-size: 4em;
    }

`

class todoList extends Component {
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
 
  deleteTodoItem = todoItemId => {
    axios.delete(`/todo/${todoItemId}`).then(res => {
    const  todoItemClone = this.state.todoItem.filter(item => item._id !== todoItemId)

        this.setState({todoItem: todoItemClone})
    })
};
  
  render() { 
    return (
      <TodoWrapper>
        <h1>To-do List</h1>
        {this.state.todoItem.map(todoItem => {
          return (
            <div key={todoItem._id}>

              <Link to={`/${todoItem._id}`}>{todoItem.description}</Link>
              <button onClick={() => this.deleteTodoItem(todoItem._id)}>X</button>
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
              <label htmlFor="description">New To-do Task</label>
              <textarea
                id="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.newTodoItem.description}
              />
            </div>
            <button>Add Task</button>
          </form>
        {/* ) : null} */}
    </TodoWrapper>
    );
  }
}

export default todoList;