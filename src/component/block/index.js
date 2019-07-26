import css from './index.module.scss'
import React, { Component } from 'react'
class Block extends Component {
    render() {
        return (
            <div>
                <div className={css.box}>
                <img src={this.props.info.pic} alt="" />
                <p className={css.title}>{this.props.info.dtitle}</p>
                <p className={css.price}>¥<span className={css.after}>{this.props.info.originPrice.toFixed(0) - this.props.info.couponPrice.toFixed(0)}</span><span className={css.prev}>¥{this.props.info.originPrice.toFixed(0)}</span></p>
                <p className={css.text}></p>
            </div>
            </div>
        )
    }
}
export default Block