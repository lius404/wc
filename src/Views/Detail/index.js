import React, { Component } from 'react'
import Wheel from '../../component/Wheel'
import axios from "axios"
import css from './index.module.scss'
import DetailItem from "../../component/DetailItem"
class Detail extends Component {
    state = {
        datalist: [],
        message: [],
        recommend: []
    }
    render() {
        return <div className={css.box} >
            <h3> 相关推荐 </h3>
            {
                this.state.datalist ? <Wheel info={this.state.datalist}></Wheel> : ""
            }
            <h3> 宝贝详情 </h3>
            {
                this.state.message ? this.state.message.map((item, index) =>
                    <img src={item.img} alt="" key={index} className={css.photo} />)
                    : ""
            }
            <h3> 今日热潮 </h3>
            {
                this.state.recommend ?  <DetailItem info={this.state.recommend} ></DetailItem>
                    : ""
            }
        </div>
    }

    componentDidMount() {
        axios.get("http://cmsjapi.dataoke.com/api/goods/get-similar-goods?id=21247995&categoryId=50009859&entityId=4&userId=808862").then(
            res => {
                this.setState({
                    datalist: res.data.data
                })
                console.log(res.data)

            })

        axios.get("http://cmsjapi.dataoke.com/api/goods/get-goods-detail-img?goodsId=592378125936&entityId=4&userId=808862").then(
            res => {
                this.setState({
                    message: JSON.parse(res.data.data)

                })
                console.log(JSON.parse(res.data.data))

            })
        axios.get("http://cmsjapi.dataoke.com/api/goods/get-recommend-goods?id=21247995&entityId=4&userId=808862").then(
            res => {
                console.log(res.data.data)
                this.setState({
                    recommend: res.data.data
                })
            }
        )
    }
}

export default Detail