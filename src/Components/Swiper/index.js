import React, { Component } from "react"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import css from './index.module.scss'
import {withRouter} from "react-router"
class Wheel extends Component {
    render() {
        return (
            <div className={css.box}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">

                        {
                            this.props.info ? this.props.info.map(item =>
                                <div className="swiper-slide" key={item.id} onClick={()=>{this.changePage(item.id)}} >
                                    <img src={item.pic} className={css.theImg} />
                                    <p className={css.theP}> {item.dtitle} </p>
                                    <p className={css.quanJine}>  <span>{ item.quanJine }元卷</span> </p>
                                    <p className={css.yuanjia}> 卷后价￥{Math.floor((item.yuanjia-item.quanJine)*100/100)} </p>
                                </div>
                            ) : ""
                        }
                    </div>
                </div>
            </div>
        )
    }
    changePage(id){
        this.props.history.push(`/detail/${id}`)
    }

    componentDidUpdate() {
        new Swiper('.swiper-container', {
            slidesPerView: 3.2,
            spaceBetween: 20,
        })
    }
}

export default withRouter(Wheel)