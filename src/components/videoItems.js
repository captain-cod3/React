import '../videoItems.css'
import React from 'react';

const videoItems = (props) => {

    //state= {currentClickedItem: null}


    return(
            <div className="ui list">
            <div className="video-content item"
            onClick={()=>  {
                props.getClickedItem(props.list)
            }}>
                    <img className="ui image" src={props.list.snippet.thumbnails.default.url} alt={props.list.snippet.channelTitle}/>
                <div className="content">
                    <div className="header">{props.list.snippet.title}</div> 
                </div>

              
            </div>
            </div>
    );
};

export default videoItems;

