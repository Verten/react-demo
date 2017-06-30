/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { withRouter } from 'react-router'

class UsersComponent extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div>I'm users component</div>
    )
  }
}

export default withRouter(UsersComponent)