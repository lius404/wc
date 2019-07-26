import React, { Component } from 'react'
import { Carousel} from 'antd-mobile';

class Swiper extends Component {
    render() {
        return (
            <div>
            <Carousel
                autoplay={true}
                infinite
                key={this.props.img}
            >
                {this.props.img.map((item, index) =><img src={item.pic} alt="" key={item.id}/>
                )}
            </Carousel>
            </div>
        )
    }
}

export default Swiper
