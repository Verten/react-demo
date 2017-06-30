/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class UsersComponent extends React.Component {
  static propTypes = {
    userList: PropTypes.array,
    actions: PropTypes.object,
  }

  static defaultProps = {}

  constructor(props, context) {
    super(props, context)
    this.state = {
      userList: [],
    }
  }

  componentWillMount() {
    const { actions } = this.props
    actions.getUsers()
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    const { isProcessing, userList, error } = nextProps
    if (!isProcessing) {
      if (error) {
        console.error(error)
      } else {
        this.setState({
          userList,
        })
      }
    }
  }

  renderUserList(userList) {
    let items = []
    userList.map(user => {
      items.push(
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login}/>
          <div>{user.login}</div>
        </div>
      )
    })
    return items
  }

  render() {
    const { userList } = this.state
    return (
      <div>{this.renderUserList(userList)}</div>
    )
  }
}

export default withRouter(UsersComponent)