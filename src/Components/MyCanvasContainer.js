import React, { useEffect } from 'react';
import $ from 'jquery'; 
import tagCanvas from 'tag-canvas'

function MyCanvasContainer() {
  useEffect(() => {
    $(document).ready(function () {
      if (!$("#myCanvas").tagcanvas({
        textColour: "#ffa500",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.2,
        maxSpeed: 0.10,
        weight: true,
      }, "tags")) {
        $("#myCanvasContainer");
      }
    });
  }, []);  

  return (
    <div id="myCanvasContainer">
      <canvas width="650" height="650" id="myCanvas"></canvas>
      <ul id="tags">
        <li><a href="#" target="_blank">HTML</a></li>
        <li><a href="#" target="_blank">CSS</a></li>
        <li><a href="#" target="_blank">WORDPRESS</a></li>
        <li><a href="#" target="_blank">SASS</a></li>
        <li><a href="#" target="_blank">JQUERY</a></li>
        <li><a href="#" target="_blank">PHP</a></li>
        <li><a href="#" target="_blank">GIT</a></li>
        <li><a href="#" target="_blank">BOOTSTRAP</a></li>
        <li><a href="#" target="_blank">NODE.JS</a></li>
        <li><a href="#" target="_blank">React.JS</a></li>
        <li><a href="#" target="_blank">ANGULAR</a></li>
        <li><a href="#" target="_blank">TYPESCRIPT</a></li>
        <li><a href="#" target="_blank">React.JS</a></li>
      </ul>
    </div>
  );
}

export default MyCanvasContainer;