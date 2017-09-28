import React from 'react';
import { Link } from 'react-router-dom'

export default class productBox extends React.Component {
  static propTypes = {
    //React.PropTypes.string.isRequired,
    //React.PropTypes.bool,
    //React.PropTypes.object,
    //React.PropTypes.oneOf(['value1', 'value2'])
    //reference to official URL: https://facebook.github.io/react/docs/reusable-components.html

  }

  static defaultProps = {}

  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="productBox">
        Hello World!
        <br/>
        Hello React!
        <p>
          <Link to='/users' >Users</Link>
          <Link to='/users/detail' >Users Detail</Link>
        </p>
      </div>
    );
  }
}