import React, { Component } from "react"
import {withRouter} from 'react-router'
import css from "./index.module.scss" 
class DetailItem extends Component {
    render() {
        return (
            <div>
                <ul className={css.item}>
                    {this.props.info ? this.props.info.map(item => <li key={item.id} onClick={()=>{this.changePage(item.id,item.goodsId) }}>
                        <img src={item.pic} alt={item.dtitle} />
                        <h3> {item.dtitle} </h3>
                        <p>
                            <span>天猫价￥{item.yuanjia}</span>
                            <span> 已售{item.xiaoliang}件 </span>
                          
                        </p>
                        <p>
                            <span>卷后价￥<em>{Math.floor((item.yuanjia-item.quanJine)*100/100)}</em></span>
                            <span> {item.quanJine}元卷</span>
                        </p>
                    </li>) : ""}
                </ul>
            </div>
        )
    }
    changePage(id,goodsId){
        this.props.history.push(`/detail/${id}?${goodsId}`)
        window.location.reload()
    }
}


export default withRouter(DetailItem)