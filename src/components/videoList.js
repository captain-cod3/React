import React from 'react';
import VideoItems from './videoItems'


const videoList = (props) =>{
    const renderedList = props.videos.map((video) => {
    return <VideoItems list={video} getClickedItem={props.clickedItem} key={video.id.videoId}/>
    });
    return(
        <div>{renderedList}</div>
    );
};

export default videoList;   