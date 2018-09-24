import React, { Component } from "react";
import Counter from "./components/counters";

class App extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 7 },
      { id: 3, value: 0 },
      { id: 4, value: 3 }
    ]
  };
  handleDelete = counterId => {
    const counter = this.state.counter.filter(c => c.id !== counterId);
    this.setState({ counter });
  };
  render() {
    return (
      <main>
        {this.state.counter.map(c => (
          <Counter
            id={c.id}
            key={c.id}
            value={c.value}
            onDelete={this.handleDelete}
          />
        ))}
      </main>
    );
  }
}

export default App;
