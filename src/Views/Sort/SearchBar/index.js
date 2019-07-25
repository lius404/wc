import React,{Component} from 'react'
import './index.scss'
class SearchBar extends Component{
    render(){
        return<div className="searchbar">
            <span className="iconfont search-span-back">&#xe63c;</span>
            <div className="searchbox">
                <span className="iconfont search-span">&#xe62f;</span>
                <div className="search_area">输入商品名或粘贴宝贝标题搜索</div>
            </div>
        </div>
    }
}

export default SearchBar