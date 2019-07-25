import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
class Navbar extends Component{
    render(){
        return<div className='nav_div'>
            <ul className='nav_ul'>
                <li><NavLink to='/home' replace activeClassName={css.myactive}>
                    <span className='iconfont'>&#xe634;</span>
                    首页</NavLink></li>
                <li><NavLink to='/nine' replace activeClassName={css.myactive}>
                    <span className='iconfont'>&#xe6bf;</span>
                    9.9包邮</NavLink></li>
                <li><NavLink to='/sort' replace activeClassName={css.myactive}>
                    <span className='iconfont'>&#xe623;</span>
                    分类</NavLink></li>
                <li><NavLink to='/collect' replace activeClassName={css.myactive}>
                    <span className='iconfont'>&#xe61f;</span>
                    收藏</NavLink></li>
                <li><NavLink to='/my' replace activeClassName={css.myactive}>
                    <span className='iconfont'>&#xe76d;</span>
                    我的</NavLink></li>
            </ul>
        </div>
    }
}

export default Navbar;
