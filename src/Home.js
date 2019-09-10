import React, { Component } from "react";
import Panel from './Panel';
import PanelRight from "./PanelRight";
import MiddlePanel from "./MiddlePanel";
import FacebookPage from "./FacebookPage";
import Instagram from "./Instagram";
import TwitterTimeline from "./TwitterTimeline";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
        <h1 class ="text-center title"><Fade bottom>Inicio</Fade></h1>
        <div class="container">
          <div class="row ">
          <div class="col-sm-6"><NavLink to="/bio"><MiddlePanel text = "Biografia"/></NavLink></div>
          <div class="col-sm-6"><MiddlePanel/></div>
          <div class="col-sm-6"><MiddlePanel/></div>
          <div class="col-sm-6"><MiddlePanel/></div>
          </div>
        </div>
        </div>
        <div class="banner"></div>
        <h1 class ="text-center title"><Slide bottom>Videos</Slide></h1>

        <div class="banner"></div>
        <h1 class ="text-center title"><Slide bottom>Social</Slide></h1>
        <div class ="container">
        <div class ="row text-center">
          <div class ="col-sm-4">
          <p class ="text-center">Facebook</p>
          <FacebookPage/></div>
          <div class ="col-sm-4">
          <p class ="text-center">Instagram</p>
          <Instagram/></div>
          <div class ="col-sm-4">
          <p class ="text-center">Twitter</p>
          <TwitterTimeline/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
