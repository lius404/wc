import React, { Component } from 'react'
import axios from 'axios'
import Swip from '../../../component/swiper'
import css from './index.module.scss'
import Conswiper from '../../../component/conswiper'
import Block from '../../../component/block'
import List from '../../../component/list'

class Choice extends Component {
    state = {
        swipeList: [],
        headList: [],
        navList: [],
        blockList: [],
        conList:[]
    }
    render() {
        return <div style={{ paddingTop: '.87rem' }}>
            <Swip img={this.state.swipeList} />
            <ul>
                {
                    this.state.headList.map(item => <li key={item.name}>
                        <img src={item.address} alt="" />
                        <p>{item.name}</p>
                    </li>)
                }
            </ul>
            <div className={css.con_1}>
                <h3>大家都在领</h3>
                <Conswiper info={this.state.navList} />
            </div>
            <div className={css.con_2}>
                <div className={css.top}>
                    <h1>
                        <img src="https://img.alicdn.com/imgextra/i1/2053469401/O1CN01Y3loxV2JJhvJsPrnm-2053469401.jpg" alt="" />
                    </h1>
                    <p className={css.up}>韩风快时尚-韩都衣舍</p>
                    <p className={css.down}>早秋新品 低至68元</p>
                </div>
                <div className={css.box}>
                    {
                        this.state.blockList.map(item => <Block info={item} key={item.id} className={css.a} />)
                    }
                </div>
                <div className={css.con_list}>
                    <h3>大家都在领</h3>
                    {
                        this.state.conList.map(item=><List info={item} key={item.id}/>)
                    }
                </div>
            </div>
        </div>
    }
    componentDidMount() {
        axios({
            url: 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id?entityId=4&modelId=1&source=3&userId=808862'
        }).then(res => {
            this.setState({
                swipeList: res.data.data.config
            })
        })
        axios({
            url: 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id?entityId=4&modelId=2&source=3&userId=808862'
        }).then(res => {
            this.setState({
                headList: res.data.data.config.data
            })
        })
        axios({
            url: 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id?entityId=4&modelId=16&source=3&userId=808862'
        }).then(res => {
            var list = res.data.data.config.list
            list.splice(2, 1)
            this.setState({
                navList: list
            })
        })
        axios({
            url: 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id?entityId=4&modelId=15&source=3&userId=808862'
        }).then(res => {
            this.setState({
                blockList: res.data.data.config.list
            })
        })
        axios({
            url:'http://cmsjapi.dataoke.com/api/category/index/lingquan-live?pageSize=20&pageId=1&entityId=4&userId=808862'
        }).then(res=>{
            console.log(res.data.data.list)
            this.setState({
                conList:res.data.data.list
            })
        })
    }
}

export default Choice