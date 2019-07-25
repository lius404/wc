import React,{Component} from'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import css from './index.module.scss'
import Block from '../../component/block'

class Conswiper extends Component{
    state={
        navList:[]
    }
    render(){
        return(
            <div>
                <div className={"swiper-container swiper_2 "+css.swiper_container}>
                    <div className="swiper-wrapper">
                        {
                            this.props.info.map(item=><div className={"swiper-slide "+css.swiper_slide} key={item.id}>
                                <Block info={item}/>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
            var mySwiper2 = new Swiper('.swiper_2', {
                slidesPerView : 2.8,
                spaceBetween : 3,
                freeMode: true
            })
            return mySwiper2
    }
}

export default Conswiper
