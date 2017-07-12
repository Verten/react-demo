import React from 'react';

export default class productBox extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor() {
    super();
    this.state = {
      counter: 0,
    }
    this.hangdleIncrease = this.hangdleIncrease.bind(this)
    this.handleReduce = this.handleReduce.bind(this)
  }

  hangdleIncrease() {
    this.setState({
      counter: ++this.state.counter,
    })
  }

  handleReduce() {
    this.setState({
      counter: --this.state.counter,
    })
  }

  render() {
    return (
      <div className="productBox">
        Hello World!
        <br/>
        Hello React!
        <div>
          <p>counter: {this.state.counter}</p>
          <button onClick={this.hangdleIncrease}>+1</button>
          <button onClick={this.handleReduce}>-1</button>
        </div>
      </div>
    );
  }
}