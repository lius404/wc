import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
class ListNavbar extends Component{
    state={
        datalist:[]
    }
    componentDidMount(){
        axios({
            url:"/index.php?r=class/category&type=1",
        }).then(res=>{
            this.setState({
                datalist:res.data.data.data
            })
        })
    }
    render(){
        return<div className="listnavbar">
            <div className='nullbox'></div>
            {
                this.state.datalist.map(item=>
               <NavLink to='/sort' 
               replace activeClassName={css.myactive} 
               ><span>{item.name}</span></NavLink>
                )
            }
            <div className='nullbox2'></div>
        </div>
    }
    changeList=(id)=>{
        console.log(id)

    }
}

export default ListNavbar