import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        //Component class has it's constructor as well so we need to call that as well
        
        //this is how we intial state in funcational based componenets
        /**only class based components have state and not functional  based components 
         * 
         * class based component is used when we need to know the state. eg of function base component
         * ()=>{return (<div>alkdfj</div>)}
        */
        this.state = { term :'Start'};//there property term is self created and it can be changed to anything like message.
    }

    /*
    render(){
        return <input onChange={this.onInputChange}/>
        // or we can also do as shorthand:
        //return <input onChange={(event) => console.log(event.target.value)}
    } 

    onInputChange(event){
        console.log(event.target.value)
    }
    */
    render(){
        return (
            <div className='search-bar'>
                <input 
                value={this.state.term}//this line make this component a controlled input
                onChange={event=> this.onInputChange(event.target.value)}/>
            </div>
        );
    }
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term)
    }

}

export default SearchBar;
