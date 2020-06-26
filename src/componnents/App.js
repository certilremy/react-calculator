import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      actualData: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(BtnName) {
    const newState = calculate(this.state, BtnName);
    this.setState(newState);
  }

  render() {
    const { actualData } = this.state;
    return (
      <div className="wrapper flex">
        <Display result={actualData} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
