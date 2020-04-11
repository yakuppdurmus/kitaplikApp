import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SearchBar,SearchList } from '../components'

export class Search extends Component {
    constructor(props){
        super(props);
        this.state={

            books:[],
            term:"",

        }
    }
    searchTerm(Term){

        //TEST
        if(Term.length>10){
            this.setState({books:[],term:Term});
            return;
        }

        if(Term.length>=3){
            this.setState({books:[1,2,3,4,5,6,7,8,9,0],term:Term})
        }else{
            this.setState({books:[],term:Term});
        }
    }
    onPressClear(){
        this.setState({books:[],term:""})
    }
    render() {
        return (
            <View style={{flex:1}}>
                <SearchBar 

                navigation={this.props.navigation} 
                onChangeText={(Term)=>{this.searchTerm(Term)}}
                term = {this.state.term}
                onPressClear={()=>{this.onPressClear()}}
                />
                <SearchList items={this.state.books} term={this.state.term} />
            </View>
        )
    }
}

export default Search
