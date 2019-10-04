import React, { Component } from "react";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import video from "./../video/video.mp4";
import logo from "./../img/logotest.png";

class JumbotronVideo extends Component {
  render() {
    return (
      <header className="h50 lg-12">
        <video
          playsInline="playsInline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          className="opacityvideo"
        >
          <source src={video} type="video/mp4"></source>
        </video>
        <div class="container">
          <div class="text-center align-items-center">
            <div class="w-100 text-white">
              <Navbar />
              <img src={logo} class="h75" alt="Logo Vick"></img>
              <p class="lead botMargin">
                <Fade bottom>Músico & Compositor</Fade>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default JumbotronVideo;
