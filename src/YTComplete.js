import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import data from "./videodata.json";

class YTComplete extends React.Component{
  render() {
    return(
      <div>
        <h1 class = "text-center title tracking-in-contract tracking-in-contract"><Fade bottom>Videos</Fade></h1>
        <div class = "container">
        <div class = "row align-items-start">
        {data.map((postDetail, index) =>{
          return <Slide bottom><div>
          <div class = "col-4 ">
            <iframe class ="youtubevid yellowborder" src={postDetail.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="text-break">{postDetail.name}</p>
          </div>
          </div></Slide>
        })}
        </div>
        </div>
      </div>
    )
}
}

export default YTComplete;
