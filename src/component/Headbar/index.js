import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {NavLink} from 'react-router-dom'
// import Choice from '../../Views/Home/choice'
// import Other from '../../Views/Home/other'

class Headbar extends Component {
    render() {
        return (
            <div className={css.headbar}>
                <div className={css.left}><NavLink to='/home/choice' replace activeClassName={css.myactive}>精选</NavLink><span></span></div>
                <div className={"swiper-container bar " + css.swiper_container}>
                    <div className="swiper-wrapper">
                        <div className={"swiper-slide "+ css.swiper_slide}>女装</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>美食</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>男装</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>美妆</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>家居日用</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>鞋品</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>数码家电</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>母婴</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>内衣</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>包厢</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>配饰</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>文娱车品</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>家装家纺</div>
                        <div className={"swiper-slide "+ css.swiper_slide}>户外运动</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className={css.right}>下</div>
            </div>
        )
    }
    componentDidMount(){
        var mySwiper = new Swiper('.bar', {
           slidesPerView : 4.5,
           spaceBetween : 0,
           freeMode: true
        })
        return mySwiper
    }
}

export default Headbar
