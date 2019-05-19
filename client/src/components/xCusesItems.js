import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class xCusesItems extends Component {
  state = {
    xCusesItems: [],
    newXCusesItems: {
      description: ""
    },
    isXCusesItemsDisplayed: false
  };

  componentDidMount = () => {
    axios.get("/xcuses").then(res => {
      console.log(res.data);
      this.setState({ xCusesItems: res.data });
    });
  };

  toggleXCusesItems = () => {
    this.setState((state, props) => {
      return { isXCusesItemsDisplayed: !state.isXCusesItemsDisplayed };
    });
  };

  //   handleChange = (e) => {
  //     const cloneNewCreature = {...this.state.newCreature}
  //     cloneNewCreature[e.target.name] = e.target.value
  //     this.setState({newCreature: cloneNewCreature})
  //   }

  createxCusesItems = e => {
    e.preventDefault();
    axios
      .post("/component/xCusesItems.js", {
        name: this.state.newXCusesItems.description,
        description: this.state.newXCusesItems.description
      })
      .then(res => {
        const xCusesItemsList = [...this.state.xCusesItems];
        xCusesItemsList.unshift(res.data);
        this.setxCusesItems({
          newxCusesItems: {
            name: "",
            description: ""
          },
          isXCusesItemsDisplayed: false,
          xCusesItems: xCusesItems
        });
      });
  };

  render() {
    return (
      <div>
        <h1>xCusesItems</h1>
        {this.state.xCusesItems.map(xCusesItems => {
          return (
            <div key={xCusesItems._id}>
              <Link to={`/${xCusesItems._id}`}>{xCusesItems.description}</Link>
            </div>
          );
        })}
        <button onClick={this.togglexCusesItemsForm}>+ New xCusesItems</button>
        {this.state.isXCusesItemsDisplayed ? (
          <form onSubmit={this.xCusesItems}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.newXCusesItems.name}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                onChange={this.handleChange}
                value={this.state.newXCusesItems.description}
              />
            </div>
            <button>xCusesItems</button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default xCusesItems;
