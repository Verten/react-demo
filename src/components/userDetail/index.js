/**
 * Created by ebinhon on 9/28/2017.
 */
import React from 'react'
import { withRouter } from 'react-router'


class UserDetailComponent extends React.Component {
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
      <div>
        I'm user detail component
      </div>
    )
  }
}

export default withRouter(UserDetailComponent)