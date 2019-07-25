import React,{Component} from 'react'
import './index.css'



class Headerbar extends Component{
    state={
        isShow:true
    }
    render(){
        return<body>
            <div className='main-title'>
                <a className='main-back' href='../Views/Home/index.js'>◀</a>
                <div className='menu-cat'>
                    <span>
                    <img src="https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201907171617" alt=""/>
                    </span>
                </div>
                <a className='main-more'  onClick={()=>{
                console.log(this.state.isShow)
                this.setState({
                isShow:!this.state.isShow}
            )
            } }
            >☷</a>
            </div>

            <nav className={this.state.isShow?'hidden':'show'}>
            <div className='arrow'></div>   
            <div className='detail-menu-content'>
                <ul className='main-detail'>
                <li>
                        <a href='../Views/Home/index.js'>
                            <span className='iconfont'></span>
                            首页
                        </a>
                    </li>
                    
                <li>
                        <a href='搜索'>
                            <span className='iconfont'></span>
                            搜索
                        </a>
                    </li>
                    
                <li>
                        <a href='客服'>
                            <span className='iconfont'></span>
                            客服
                        </a>
                    </li>
                    
                <li>
                        <a href='反馈'>
                            <span className='iconfont'></span>
                            反馈
                        </a>
                    </li>
                    
                <li>
                        <a href='我的'>
                            <span className='iconfont'></span>
                            我的
                        </a>
                    </li>
                    
                </ul>
            </div>


            </nav>

        </body>
    }

}

export default Headerbar