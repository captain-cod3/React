import React from 'react';
import SearchBar from './searchbar'
import VideoList from './videoList'
import SelectedVideo from './selectedVideo'
import axios from 'axios'



const KEY = "AIzaSyA79-yDPsnXbqq6kaqFxClPKHDH3rVTNQs";

class App extends React.Component{

    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onSubmitForm('Valorant Highlights');
    }
  
    onSubmitForm= async (text)=>{
        const response= await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              part: "snippet",
              maxResults: 15,
              key: KEY,
              q: text,
            },
          });
        this.setState({videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

    onClickVideo = (value) =>{
        //console.log(value)
        this.setState({selectedVideo:value});
    };

    
    render(){
        return(
            <div className="ui container"> 
                <SearchBar submit={this.onSubmitForm}/>
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                        <SelectedVideo value={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList videos={this.state.videos} clickedItem={this.onClickVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};



export default App;