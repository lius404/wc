import React,{Component} from 'react'
import ListNavbar from './ListNavbar'
import SearchBar from './SearchBar'
class Sort extends Component{
    render(){
        return<div>
            <SearchBar></SearchBar>
            <ListNavbar></ListNavbar>
        </div>
    }
}

export default Sort