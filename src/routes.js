/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import Box from './components/productBox'
import UserContainer from './containers/user'

const Routes = () => (
  <div>
    <Route exact path='/' component={Box}/>
    <Route path='/users' component={UserContainer}/>
  </div>
)

export default Routes