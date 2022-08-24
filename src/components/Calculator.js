import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [output, setOutput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    setOutput(calculate(output, event.target.id));
  };

  // displayed output
  const result = () => {
    const { total, operation, next } = output;
    return (
      <>
        {total}
        {operation}
        {next}
      </>
    );
  };

  return (
    <>
      <header className="calculator-page-heading">
        <h1>Let&apos;s perform some calculations!</h1>
      </header>
      <div className="calculator">
        {/* display */}
        <div className="display">
          <span>{result()}</span>
        </div>
        {/* main keys */}
        <div className="main-keys">
          <button type="submit" onClick={handleClick} id="AC">
            AC
          </button>
          <button type="button" onClick={handleClick} id="+/-">
            +/-
          </button>
          <button type="button" onClick={handleClick} id="%">
            %
          </button>
        </div>

        {/* operator keys */}
        <div className="operator-keys">
          <button type="button" onClick={handleClick} id="&#247;">
            &#247;
          </button>
          <button type="button" onClick={handleClick} id="x">
            x
          </button>
          <button type="button" onClick={handleClick} id="-">
            -
          </button>
          <button type="button" onClick={handleClick} id="+">
            +
          </button>
          <button type="submit" onClick={handleClick} id="=">
            =
          </button>
        </div>

        {/* digit keys */}
        <div className="digit-keys">
          <button type="button" onClick={handleClick} id="7">
            7
          </button>
          <button type="button" onClick={handleClick} id="8">
            8
          </button>
          <button type="button" onClick={handleClick} id="9">
            9
          </button>
          <button type="button" onClick={handleClick} id="4">
            4
          </button>
          <button type="button" onClick={handleClick} id="5">
            5
          </button>
          <button type="button" onClick={handleClick} id="6">
            6
          </button>
          <button type="button" onClick={handleClick} id="1">
            1
          </button>
          <button type="button" onClick={handleClick} id="2">
            2
          </button>
          <button type="button" onClick={handleClick} id="3">
            3
          </button>
          <div className="special-digits">
            <button type="button" onClick={handleClick} id="0">
              0
            </button>
            <button type="button" onClick={handleClick} id=".">
              .
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
