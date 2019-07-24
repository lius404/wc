import React, { Component } from "react"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import css from './index.module.scss'
class Wheel extends Component {
    render() {
        return (
            <div className={css.box}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">

                        {
                            this.props.info ? this.props.info.map(item =>
                                <div className="swiper-slide" key={item.id}>
                                    <img src={item.pic} className={css.theImg} />
                                    <p className={css.theP}> {item.dtitle} </p>
                                    <p className={css.theP}> ￥{item.yuanjia} </p>
                                </div>

                            ) : ""
                        }
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        new Swiper('.swiper-container', {
            slidesPerView: 3.2,
            spaceBetween: 20,
        })
    }
}

export default Wheel