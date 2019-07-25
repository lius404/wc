import React,{Component} from 'react'
import Headerbar from '../../Components/Headerbar'
import Nine_list from '../../Components/Nine_list'
import Nine_swiper from './Nine_swiper/index_hour'
import Headwear from '../Nine/Nine_swiper/headwear'
import Node from '../Nine/Nine_swiper/node'

import './index.css'



class Nine extends Component{
    render(){
        return<body>
            <Headerbar></Headerbar>
            <Nine_list></Nine_list>
            <div className='aaaaaaaaaa'></div>
            <Nine_swiper></Nine_swiper>
            <Headwear></Headwear>
            <Node></Node>
        </body>
    }
}

export default Nine