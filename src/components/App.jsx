import React, { Component } from "react";
import Feedback from "./Feedback/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleIncrementFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  }
  
  render() {
    return (
      <Feedback stateFeedback={this.state} onFeedbackIncrement={ this.handleIncrementFeedback } />
    );
  }
};

export default App;
