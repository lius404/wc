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
            <Route path='/home' component={Home} />
            <Route path='/collect' component={Collect} />
            <Route path='/nine' component={Nine} />
            <Route path='/detail/:id' component={Detail} />
            <Route path="/sort" component={Sort}/>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Redirect from='/' to='/home' exact/>
        </Switch>
    </App>
</HashRouter>

export default router