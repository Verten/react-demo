/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../../actions'
import UserComponent from '../../components/users'

export class UserContainer extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
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
      <UserComponent {...this.props}/>
    )
  }
}

function mapStateToProps(state) {
  const { userReducer } = state
  const { isProcessing, userList, user, error } = userReducer.toJS()
  return {
    isProcessing,
    error,
    user,
    userList,
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions.userAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatch)(UserContainer)