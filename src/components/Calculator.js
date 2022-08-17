/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import Digits from './Digits';

// implement calculator component
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        {/* display */}
        <div className="display">
          <span>0</span>
        </div>
        {/* main keys */}
        <div className="main-keys">
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
        </div>

        {/* operator keys */}
        <div className="operator-keys">
          <button>+</button>
          <button>x</button>
          <button>-</button>
          <button>/</button>
          <button>=</button>
        </div>

        {/* digit keys */}
        <div className="digit-keys">
          <Digits />
          <div className="special-digits">
            <button>0</button>
            <button>.</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
