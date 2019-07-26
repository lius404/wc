import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
class ListNavbar extends Component{
    state={
        datalist:[],
        sortlist:[],
        sortdetail:[],
        theindex:0
    }
    componentDidMount(){
        axios({
            url:"/index.php?r=class/category&type=1",
        }).then(res=>{
            console.log(res.data.data.data)
            this.setState({
                datalist:res.data.data.data
            })

        })
    }
    render(){
        return<div className="listnavbar">
                <div className="leftbar">
                    <div className='nullbox'></div>
                    {
                        this.state.datalist.map((item,index)=>
                            <div>
                        <NavLink to='/sort' replace activeClassName={css.myactive} key= {item.cid}
                        onClick={()=>this.setState({
                            theindex:index
                        })}><span>{item.name} </span></NavLink>
                            {/* { index=== 0?  console.log(item.floors) :null } */}
                            { index===this.state.theindex? console.log( item.floors ):"" }
                        </div>
                        )
                    }
                <div className='nullbox2'></div>
            </div>
            <div className="rightlist">
                <div className='nullbox'></div>
                {
                    this.state.sortlist.map(item=><div className="listbox" key={item.name}>
                        <h2 key={item.name} className="listh2">{item.name}</h2>
                        {  
                            item.list.map(item=><div className="rightdetail" key= {item.api_cid}>
                            <img src={item.img} alt="123" className="listimg" key= {item.api_cid}/>
                            <h3 key={item.name} className="listh3">{item.name}</h3>
                        </div>)
                        }
                    </div>)
                }
                <div className='nullbox2'></div>
            </div>
        </div>
    }
    handleList(id){
        for(var i=0;i<this.state.datalist.length;i++){
            if(this.state.datalist[i].cid === id){
                this.setState({
                    sortlist:this.state.datalist[i].floors
                })
            }
        }
        for(var j=0;j<this.state.sortlist.length;j++){
            this.setState({
                sortdetail:this.state.sortlist[j].list
            })
        }
    }
}

export default ListNavbar
