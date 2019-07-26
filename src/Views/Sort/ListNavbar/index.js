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
            <div  className="bigbox">
                    {
                        this.state.datalist.map((item,index)=>
                            <div key={item.name} >
                                <div className="leftbar" key={item.name}>
                                <NavLink  to='/sort' replace activeClassName={this.state.theindex===index?css.myactive:null} 
                                key={item.cid} 
                                onClick={()=>this.setState({
                                    theindex:index
                                })}>
                                    <span>{item.name}</span>
                                </NavLink></div>
                                { index===this.state.theindex?
                                        <div className="rightlist">
                                            <div className='nullbox'></div>
                                            {
                                                item.floors.map(itemtwo=><div className="listbox" key={itemtwo.name}>
                                                <h2 key={itemtwo.name} className="listh2">{itemtwo.name}</h2>
                                                {
                                                    itemtwo.list.map(itemthree=><div className="rightdetail" key= {itemthree.api_cid} onClick={()=>this.handleSortClick(itemthree.api_cid)}>
                                                        <img src={itemthree.img} alt="123" className="listimg" key= {itemthree.api_cid}/>
                                                        <h3 key={itemthree.name} className="listh3">{itemthree.name}</h3>
                                                    </div>)
                                                }
                                                </div>)
                                            }
                                            <div className='nullbox2'></div>
                                        </div>:"" 
                                }
                            </div>
                        )
                    }
            </div>
        </div>
    }

    handleSortClick(id){
        console.log(id)
    }


    // handleList(id){
    //     for(var i=0;i<this.state.datalist.length;i++){
    //         if(this.state.datalist[i].cid === id){
    //             this.setState({
    //                 sortlist:this.state.datalist[i].floors
    //             })
    //         }
    //     }
    //     for(var j=0;j<this.state.sortlist.length;j++){
    //         this.setState({
    //             sortdetail:this.state.sortlist[j].list
    //         })
    //     }
    // }
}

export default ListNavbar








