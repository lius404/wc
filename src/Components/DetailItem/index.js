import React, { Component } from "react"
import css from "./index.module.scss" 
class DetailItem extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.info, "0000")}
                <ul className={css.item}>
                    {this.props.info ? this.props.info.map(item => <li key={item.id}>
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
}


export default DetailItem