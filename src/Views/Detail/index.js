import React, { Component } from 'react'
import Wheel from '../../component/Wheel'
import axios from "axios"
import css from './index.module.scss'
import DetailItem from "../../component/DetailItem"
class Detail extends Component {
    state = {
        datalist: [],
        message: [],
        recommend: [],
        category: [],
        isfocus: 'one',
        fixed:false
    }
    render() {
      //  console.log(this.state.category)
        return <div className={css.box} >

            {
                <header  className={ this.state.fixed?css.isdisplay:""}>
                    <a>◁</a>
                    <ul className={ this.state.fixed?css.show:""}>
                        <li onClick={() => {
                            this.setState({
                                isfocus: 'one'
                            })
                        }}>
                            <span className={this.state.isfocus==="one"?css.focus:""}> <a href="#goods">商品</a></span>
                        </li>
                        <li onClick={() => {
                            this.setState({
                                isfocus: 'two'
                            })
                        }}>
                            <span className={this.state.isfocus==="two"?css.focus:""}>  <a href="#details">详情</a></span>
                        </li>
                        <li onClick={() => {
                            this.setState({
                                isfocus: 'three'
                            })
                        }}>
                            <span className={this.state.isfocus==="three"?css.focus:""}> <a href="#Recommend">推荐</a> </span>
                        </li>
                    </ul>
                    <a>...</a>
                </header>
            }
            {
                this.state.category ? <div className={css.shop}>
                    <div>
                        <img src={this.state.category.shopLogo} alt="" />
                        <h4> {this.state.category.shopName}</h4>
                        <span> 店铺所有优惠 > </span>
                    </div>

                    <ul>
                        <li> 宝贝描述 {this.state.category.dsrScore} {(this.state.category.dsrScore >= 4.8) ? <span>高</span> : <span className={css.low}>低</span>}  </li>
                        <li>  卖家服务 {this.state.category.serviceScore} {(this.state.category.serviceScore >= 4.8) ? <span>高</span > : <span className={css.low}>低</span>}  </li>
                        <li> 物流服务 {this.state.category.shipScore}  {(this.state.category.shipScore >= 4.8) ? <span>高</span> : <span className={css.low}>低</span>}  </li>
                    </ul>

                </div> : null
            }



            <h3> <a id="goods" >相似推荐</a>  </h3>
            {
                this.state.datalist ? <Wheel info={this.state.datalist}></Wheel> : null
            }
            <h3>  <a id="details">宝贝详情</a>  </h3>
            {
                this.state.message ? this.state.message.map((item, index) =>
                    <img src={item.img} alt="" key={index} className={css.photo} />)
                    : null
            }
            <h3> <a id="Recommend">今日热潮 </a> </h3>
            {
                this.state.recommend ? <DetailItem info={this.state.recommend} ></DetailItem>
                    : null
            }
            <footer>
                <ul>
                    <li> <p>图标</p> 分享</li>
                    <li> <p> 收藏 </p> 收藏</li>
                    <li> <span>口令购买</span> </li>
                    <li> <span>领劵购买</span> </li>
                </ul>
            </footer>
        </div>
    }

    componentDidMount() {
        window.onscroll = ()=>{
            // console.log("scorll")
            if(document.documentElement.scrollTop>=200){
                console.log("fixed");
                this.setState({
                    fixed:true
                })
            }else{
                this.setState({
                    fixed:false
                })
            }
        }

        axios.get(`http://cmsjapi.dataoke.com/api/goods/get-goods-shop-info?goodsId=${this.props.history.location.search.slice(1)}&entityId=4&userId=808862`).then(res => {
            axios.get(`http://cmsjapi.dataoke.com/api/goods/get-similar-goods?id=${this.props.match.params.id}&categoryId=${res.data.data.categoryId}&entityId=4&userId=808862`).then(
                res => {
                    this.setState({
                        datalist: res.data.data
                    })

                })
            this.setState({
                category: res.data.data
            })
       
        })



        axios.get(`http://cmsjapi.dataoke.com/api/goods/get-goods-detail-img?goodsId=${this.props.history.location.search.slice(1)}&entityId=4&userId=808862`).then(
            res => {
                if (res.data.data) {
                    this.setState({
                        message: JSON.parse(res.data.data)
                    })
                } else {
                    return
                }


            })
        axios.get(`http://cmsjapi.dataoke.com/api/goods/get-recommend-goods?id=${this.props.match.params.id}&entityId=4&userId=808862`).then(
            res => {
                this.setState({
                    recommend: res.data.data

                })
            }
        )

    }
}
export default Detail
// http://cmsjapi.dataoke.com/api/goods/get-goods-detail-img?goodsId=587057321190&entityId=4&userId=808862
// http://cmsjapi.dataoke.com/api/goods/get-goods-shop-info?goodsId=587057321190&entityId=4&userId=808862
// http://cmsjapi.dataoke.com/api/goods/get-recommend-goods?id=21267296&entityId=4&userId=808862
//http://cmsjapi.dataoke.com/api/goods/get-similar-goods?id=21208157&categoryId=50000671&entityId=4&userId=808862
