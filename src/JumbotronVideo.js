import React, {Component} from "react";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import video from "./video.mp4";
import logo from "./logotest.png";

class JumbotronVideo extends Component{
  render(){
    return(
      <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={video} type="video/mp4"></source>
        </video>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <Navbar/>
              <img src={logo} class="jumbotronlogo"></img>
              <p class="lead mb-0"><Fade bottom>Vick LePonce</Fade></p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default JumbotronVideo;
