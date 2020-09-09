import React from 'react';

const selectedVideo = (props) => {
 if(!props.value){
     return <div>loading...</div>;
 }

const url=`https://www.youtube.com/embed/${props.value.id.videoId}`;

        return(
            <div>
            <div className="ui embed">
                <iframe title="video player" src={url}/>
            </div>
            <div className="ui segment">
                <h3 className="content">{props.value.snippet.title}</h3>
                <p>{props.value.snippet.description}</p>
            </div>
            </div>
        );
    
};

export default selectedVideo;


