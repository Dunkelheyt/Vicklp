import React, { Component } from "react";
import Panel from './Panel';
import PanelRight from "./PanelRight";
import MiddlePanel from "./MiddlePanel";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
        <h1 class ="text-center title">Inicio</h1>
        <div class="container">
          <div class="row ">
          <div class="col-sm-6"><MiddlePanel/></div>
          <div class="col-sm-6"><MiddlePanel/></div>
          <div class="col-sm-6"><MiddlePanel/></div>
          <div class="col-sm-6"><MiddlePanel/></div>
          </div>
        </div>
        </div>
        <div class="banner"></div>
      </div>
    );
  }
}

export default Home;
