import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Biography from "./Biography";
import Contact from "./Contact";
import Panel from './Panel';
import PanelRight from "./PanelRight";
import Navbar from "./Navbar";
import JumbotronVideo from "./JumbotronVideo";
import YTComplete from "./YTComplete";
import VickDisco from "./VickDisco";

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
      <div>
          <JumbotronVideo/>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/biografia" component={Biography}/>
          <Route path="/videos" component={YTComplete}/>
          <Route path="/discografia" component={VickDisco}/>
          <Route path="/contacto" component={Contact}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}

export default Main;
