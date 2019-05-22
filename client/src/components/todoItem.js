import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import images from '../images/clear-road.png';

const TodoItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    font-size: 4em;
    background-image: url(${images});
    background-size: cover;
    color: lightblue;
    text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;

    h1 {
      font-size: 4em;
    }

    .button {
      font-size: 5em;
      color: lightblue;
    }


`

class todoItem extends Component {
  state = {
    todoItem: {},
  };

  componentDidMount = () => {
    axios.get(`/todo/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({ todoItem: res.data });
    });
  };

  updateTodoItem = () => {
    axios.patch(`/todo/${this.props.match.params.id}`, this.state.todoItem).then(res => {
          this.setState({todoItem: res.data, isEditFormDisplayed: false})
      })
    }

createXcuse = () => {
  axios.post('/xcuses', {
    description: this.state.xcuse,
    item: this.state.todoItem.description
  })
}
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

  onXcuseChange = (event) => {
    let xcuse = event.target.value
    this.setState({xcuse: xcuse})
  }

  handleChange = (event) => {
    let todoItemClone = this.state.todoItem
    const value = event.target.value

    todoItemClone.description = value
    this.setState({todoItem: todoItemClone})
  }

  render() {
    return (
      <TodoItemWrapper>
        <h1>To-Do Task</h1>
        <div>{this.state.todoItem.description}

            <div key={todoItem._id}>
          <form>
            <textarea name="description" onChange={this.handleChange} value={this.state.todoItem.description}></textarea>
            </form>

              <Link to={`/`}>
              <button onClick={() => this.updateTodoItem(todoItem._id)}>Update</button>
              </Link>

              <textarea name="xcuse" onChange={this.onXcuseChange}>{this.state.xcuse}</textarea>
              <Link to="/xcuses"><button onClick={this.createXcuse}>{'{X}'}cuse</button></Link>
            </div>
          </div>
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
      </TodoItemWrapper>
    );
  }
}


export default todoItem;

