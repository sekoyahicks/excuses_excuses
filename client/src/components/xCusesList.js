import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const XcusesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100vh;
    background-color: lavender;

    h1 {
      font-size: 4em;
      text-transform: uppercase;
    }
    h2 {
      text-transform: uppercase;
    }
    p {
      font-size: 1.5em;
    }



`
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

  deleteXCusesList = xCusesListId => {
    axios.delete(`/xcuses/${xCusesListId}`).then(res => {
    const  xCusesListClone = this.state.xCusesList.filter(item => item._id !== xCusesListId)

        this.setState({xCusesList: xCusesListClone})
    })
  };

  render() {
    return (
      <XcusesWrapper>
        <h1>xCuses</h1>
        {this.state.xCusesList.map(xCusesList => {
          return (
            <div key={xCusesList._id}>
              <h2>{xCusesList.item}</h2>
              <p>{xCusesList.description}</p>
              <div key={xCusesList._id}>
              {/* <Link to={`/${xCusesList._id}`}>{xCusesList.description}</Link> */}
              <button onClick={() => this.deleteXCusesList(xCusesList._id)}>X</button>
              </div>
              <h2>Stop making excuses, and go be great!</h2>
            </div>
          );
        })}
        {/* <button onClick={this.toggleXCusesListForm}>+ New XCusesList</button> */}
        {/* {this.state.isXCusesListDisplayed ? ( */}
        
         {/* ) : null} */}
        </XcusesWrapper>
    );
  }
}

export default xCusesList;
