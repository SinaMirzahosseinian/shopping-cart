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
  render() {
    return (
      <main>
        {this.state.counter.map(c => (
          <Counter key={c.id} value={c.value} />
        ))}
      </main>
    );
  }
}

export default App;
