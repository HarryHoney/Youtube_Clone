//Create a new component This component should produce
// same HTML
//we are writing JSX in this section and not javascript
//Take this component's genrated HTML and put it on the page(in the DOM)

// import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM, { render } from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyC4KJHufp6O54nTbsBAXfRDw3ZL_tIgmiw';

class App extends Component{
    constructor(props){
        super(props);
        /**
         * 
         */
        this.state = { 
            videos:[],
            selectedVideo:null
        };
        this.videoSearch('dark side');
    } 

    videoSearch(term){
        YTSearch({key:API_KEY,term:term}, (videos)=>{
            this.setState({ 
                videos:videos,
                selectedVideo:videos[0]
            })//using destructuring over here
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                    videos={this.state.videos}/> 
            </div>
            );
    }
}
/*
reactdom is used to render components and 
react is used to manage the components 
now App is the class and we need to pass the instance of that class
it is done using <App/> i.e covering it  with JSX tag
*/
ReactDOM.render(<App/>,document.querySelector('.container'));

//  api key=AIzaSyC4KJHufp6O54nTbsBAXfRDw3ZL_tIgmiw