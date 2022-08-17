import React, { Component } from 'react';

// Generate calculator digits
class Digits extends Component {
  render() {
    const digits = [];
    for (let i = 9; i > 0; i--) {
      digits.push(<button key={i}>{i}</button>);
    }
    return digits;
  }
}

export default Digits;
