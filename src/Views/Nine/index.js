import React,{Component} from 'react'
import Headerbar from '../../component/Headerbar'
import Nine_list from '../../component/Nine_list'
import Nine_swiper from './Nine_swiper/index_hour'
import Headwear from '../Nine/Nine_swiper/headwear'
import Node from '../Nine/Nine_swiper/node'



class Nine extends Component{
    render(){
        return<div>
            <Headerbar></Headerbar>
            <Nine_list></Nine_list>
            <div className='aaaaaaaaaa'></div>
            <Nine_swiper></Nine_swiper>
            <Headwear></Headwear>
            <Node></Node>
        </div>
    }
}

export default Nine