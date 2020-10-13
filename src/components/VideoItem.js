import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      onClick={(event) => props.onVideoSelect(props.video)}
      className="video-item item"
    >
      <img
        alt={props.video.snippet.title}
        className="ui image"
        style={{margin: "2px", paddingRight: "10px"}}
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
