import React from 'react';
import Buttons from './buttons';
import Display from './display';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="display">
          <Display label="0" />
        </div>
        <div className="operators-container">
          <div className="grey-btn">
            <Buttons label="AC" />
            <Buttons label="+/-" />
            <Buttons label="%" />
            <Buttons label="7" />
            <Buttons label="8" />
            <Buttons label="9" />
            <Buttons label="4" />
            <Buttons label="5" />
            <Buttons label="6" />
            <Buttons label="1" />
            <Buttons label="2" />
            <Buttons label="3" />
            <Buttons label="0" />
            <Buttons label="." />
          </div>
          <div className="orange-btn">
            <Buttons label="/" />
            <Buttons label="*" />
            <Buttons label="-" />
            <Buttons label="+" />
            <Buttons label="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
