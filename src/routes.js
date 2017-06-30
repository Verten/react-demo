/**
 * Created by ebinhon on 6/30/2017.
 */
import React from 'react'
import { Route } from 'react-router-dom'
import Box from './components/productBox'
import UserComponent from './components/users'

const Routes = () => (
  <div>
    <Route exact path='/' component={Box}/>
    <Route path='/users' component={UserComponent}/>
  </div>
)

export default Routes