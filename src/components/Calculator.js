/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */

import React, { Component, Fragment } from 'react';
import calculate from '../logic/calculate';

// implement calculator component
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: '', next: '', operation: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  // event handler method
  handleClick = (event) => {
    const button = event.target.id;
    this.setState((state) => calculate({ ...state }, button));
  };

  // displayed output
  output = () => {
    const { total, operation, next } = this.state;
    return (
      <>
        {total}
        {operation}
        {next}
      </>
    );
  };

  render() {
    return (
      <div className="calculator">
        {/* display */}
        <div className="display">
          <span>{this.output()}</span>
        </div>
        {/* main keys */}
        <div className="main-keys">
          <button onClick={this.handleClick} id="AC">
            AC
          </button>
          <button onClick={this.handleClick} id="+/-">
            +/-
          </button>
          <button onClick={this.handleClick} id="%">
            %
          </button>
        </div>

        {/* operator keys */}
        <div className="operator-keys">
          <button onClick={this.handleClick} id="&#247;">
            &#247;
          </button>
          <button onClick={this.handleClick} id="x">
            x
          </button>
          <button onClick={this.handleClick} id="-">
            -
          </button>
          <button onClick={this.handleClick} id="+">
            +
          </button>
          <button onClick={this.handleClick} id="=">
            =
          </button>
        </div>

        {/* digit keys */}
        <div className="digit-keys">
          <button onClick={this.handleClick} id="7">
            7
          </button>
          <button onClick={this.handleClick} id="8">
            8
          </button>
          <button onClick={this.handleClick} id="9">
            9
          </button>
          <button onClick={this.handleClick} id="4">
            4
          </button>
          <button onClick={this.handleClick} id="5">
            5
          </button>
          <button onClick={this.handleClick} id="6">
            6
          </button>
          <button onClick={this.handleClick} id="1">
            1
          </button>
          <button onClick={this.handleClick} id="2">
            2
          </button>
          <button onClick={this.handleClick} id="3">
            3
          </button>
          <div className="special-digits">
            <button onClick={this.handleClick} id="0">
              0
            </button>
            <button onClick={this.handleClick} id=".">
              .
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
