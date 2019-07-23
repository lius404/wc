import React from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import App from '../App'
import Collect from '../Views/Collect'
import Home from '../Views/Home'
import Nine from '../Views/Nine'
import Detail from '../Views/Detail'
import Sort from '../Views/Sort'
import Login from '../Views/Login'
import Register from '../Views/Register'


const router = <HashRouter>
    <App>
        <Switch>
            <Route path='/home' component={Home} exact/>
            <Route path='/collect' component={Collect} exact/>
            <Route path='/nine' component={Nine} exact/>
            <Route path='/detail/:id' component={Detail} exact/>
            <Route path='/sort' component={Sort} exact/>
            <Route path='/login' component={Login} exact/>
            <Route path='/register' component={Register} exact/>
            <Redirect from='/' to='/home' />
        </Switch>
    </App>
</HashRouter>

export default router