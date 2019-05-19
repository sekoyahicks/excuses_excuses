import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class xCusesList extends Component {
  state = {
    xCusesList: [],
    newXCusesList: {
      description: ""
    },
    isxCusesListDisplayed: false
  };

  componentDidMount = () => {
    axios.get("/xcuses").then(res => {
      console.log(res.data);
      this.setState({ xCusesList: res.data });
    });
  };

  toggleXCusesList = () => {
    this.setState((state, props) => {
      return { isXCusesListDisplayed: !state.isXCusesDisplayed };
    });
  };

    handleChange = (e) => {
      const cloneNewXCusesList = {...this.state.newXCusesList}
      cloneNewXCusesList[e.target.name] = e.target.value
      this.setState({newXCuses: cloneNewXCusesList})
    }

  updateTodoItem = e => {
    e.preventDefault();
    axios
      .patch("/xCuses", {
        name: this.state.updateXCusesList.name,
        description: this.state.updateXCusesList.description
      })
      .then(res => {
        const xCusesList = [...this.state.xCusesList];
        xCusesList.unshift(res.data);
        this.setState({
          updateXCusesList: {
            // name: "",
            description: ""
          },
          // isXCusesListDisplayed: false,
          xCusesList: xCusesList
        });
      });
  };

  deleteTodoItem = xCusesListId => {
    axios.delete(`/xcuses/${xCusesListId}`).then(res => {
    const  xCusesListClone = this.state.xCusesList.filter(item => item._id !== xCusesListId)

        this.setState({xCusesList: xCusesListClone})
    })
  };

  render() {
    return (
      <div>
        <h1>xCuses</h1>
        {this.state.xCusesList.map(xCusesList => {
          return (
            <div key={xCusesList._id}>
              <Link to={`/${xCusesList._id}`}>{xCusesList.description}</Link>
              <button>Xcuse</button>
            </div>
          );
        })}
        {/* <button onClick={this.toggleXCusesListForm}>+ New XCusesList</button>
        {this.state.isXCusesListDisplayed ? ( */}
          <form onSubmit={this.xCusesList}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.xCusesList.name}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.newXCusesList.description}
              />
            </div>
            <button>XCusesList</button>
          </form>
         ) : null}
      </div>
    );
  }
}

export default xCusesList;
