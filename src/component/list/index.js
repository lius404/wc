import React, { Component } from 'react'
import css from './index.module.scss'

class List extends Component {
    render() {
        return (
            <div>
                <div className={css.bx}>
                    <img src={this.props.info.pic} alt="" />
                    <h4>{this.props.info.dtitle}</h4>
                    <div className={css.title}><span>天猫价¥{this.props.info.yuanjia.toFixed(1)}</span><div className={css.right}><span>已售</span>{this.props.info.xiaoliang}<span>件</span></div></div>
                    <div className={css.price}><span>券后价¥</span>{(this.props.info.yuanjia - this.props.info.quanJine).toFixed(1)}</div>
                    <div className={css.quan}><p>{this.props.info.quanJine}元券</p></div>
                </div>
            </div>
        )
    }
}

export default List
