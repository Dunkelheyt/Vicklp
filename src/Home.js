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
        <h1 class ="text-center title borders"><Fade bottom>Inicio</Fade></h1>
        <div class="container">
          <div class="row">
          <div class="col-sm-6"><NavLink to="/bio"><MiddlePanel text = "Biografia"/></NavLink></div>
          <div class="col-sm-6"><MiddlePanel text = "Colaboraciones"/></div>
          </div>
          <div class = "row">
          <div class="col"><NavLink to="/contacto"><MiddlePanel text = "Contacto"/></NavLink></div>
          </div>
        </div>
        </div>

        <div class="banner"></div>


        <div class ="container">
        <h1 class ="text-center title borders"><Slide bottom>Videos y Discografía</Slide></h1>
          <div class="row">
          <div class="col-sm-6"><NavLink to="/disco"><MiddlePanel text = "Discografia"/></NavLink></div>
          <div class="col-sm-6"><NavLink to="/videos"><MiddlePanel text = "Videos"/></NavLink></div>
          </div>
        </div>

        <div class="banner"></div>

        <div class ="container">
        <h1 class ="text-center title borders"><Slide bottom>Social</Slide></h1>
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
