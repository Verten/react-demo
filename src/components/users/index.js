/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import CSSmodule from 'react-css-modules'
import styles from './usersComponent.css'

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
      user: null,
    }
    this.handleSelectUser = this.handleSelectUser.bind(this)
  }

  componentWillMount() {
    const { actions } = this.props
    actions.fetchUsersRequest()
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    const { isProcessing, userList, user, error } = nextProps
    if (!isProcessing) {
      if (error) {
        console.error(error)
      } else {
        this.setState({
          userList,
          user,
        })
      }
    }
  }

  handleSelectUser(userId) {
    const { actions } = this.props
    actions.fetchUserByIdRequest(userId)
  }

  renderUserList(userList) {
    let items = []
    userList && userList.map(user => {
      items.push(
        <div styleName='userList_Item' key={user.id}>
          <img src={user.avatar_url} alt={user.login} onClick={() => this.handleSelectUser(user.login)}/>
          <div styleName='userList_Item_name'>{user.login}</div>
        </div>
      )
    })
    return items
  }

  renderUserDetail(user) {
    if (!user) {
      return
    }
    return (
      <div styleName='userDetail'>
        <div styleName='userDetail_avatar'>
          <img src={user.avatar_url} alt={user.login}/>
        </div>
        <div styleName='userDetail_info'>
          <div styleName='userDetail_info_name'>{user.login}</div>
        </div>
      </div>
    )
  }

  render() {
    const { userList, user } = this.state
    return (
      <div styleName='userList'>
        {this.renderUserList(userList)}
        {this.renderUserDetail(user)}
      </div>
    )
  }
}

export default withRouter(CSSmodule(UsersComponent, styles))