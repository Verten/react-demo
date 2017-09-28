/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Box from './components/productBox'
import UserComponent from './components/users'
import UserDetailComponent from './components/userDetail'

const Routes = () => (
  <div>
    <Switch>
      <Route path='/users/detail' component={UserDetailComponent}/>
      <Route path='/users' component={UserComponent}/>
      <Route exact path='/' component={Box}/>
    </Switch>
  </div>
)

export default Routes
