import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import BiographyPapers from "./BiographyPapers";
import photo from "./vick.jpg";

class Biography extends Component {
  render() {
    return (
      <div>
      <h1 class ="text-center title tracking-in-contract"><Fade bottom>Biografia</Fade></h1>
      <Slide bottom><BiographyPapers/></Slide>
      <div class="banner"></div>

      <h1 class ="text-center title">Mis influencias</h1>
      <Slide bottom><BiographyPapers/></Slide>
      </div>
    );
  }
}

export default Biography;
