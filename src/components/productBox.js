import React from 'react';

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
          <Link to='/users' >Github Users</Link>
        </p>
      </div>
    );
  }
}