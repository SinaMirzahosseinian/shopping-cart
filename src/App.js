import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        <div className="">
          <span className={this.getBadgeClsses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary btn-sm"> Increment</button>
        </div>
      </React.Fragment>
    );
  }
  getBadgeClsses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default App;
