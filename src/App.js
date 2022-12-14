import React, { Component } from "react";

export default class App extends Component {
  state = {
    num: 0
  };

  add = () => {
    if (this.state.num < 10) {
      this.setState({ num: this.state.num + 1 });
    }
  };

  remove = () => {
    if (this.state.num > 0) {
      this.setState({ num: this.state.num - 1 });
    }
  };
  render() {
    return (
      <>
        <h1>{this.state.num}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
      </>
    );
  }
}
