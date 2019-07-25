import React, { Component } from 'react'
import css from './index.module.scss'
import Headbar from "../../component/Headbar"
import Choice from '../../Views/Home/choice'
import Other from '../../Views/Home/other'
import {Redirect,Route,Switch} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <div className={css.head_all}>
                    <div className={css.header}>
                        <div className={css.search_box}>
                            <input type="text" placeholder="输入商品名或粘贴宝贝标题搜索" />
                            <span className="iconfont con-jiaoya"></span>
                        </div>
                    </div>
                    <Headbar/>
                </div>
                <Switch>
                <Route path="/home/choice" component={Choice} exact/>
                <Route path="/home/other" component={Other} exact/>
                <Redirect from="/home" to="/home/choice"/>
            </Switch>
            </div>
        )
    }
}

export default Home