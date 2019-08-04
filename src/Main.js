import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Carousel from "./Carousel";
import Panel from './Panel';
import PanelRight from "./PanelRight";
import Navbar from "./Navbar";

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
      <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/carousel">Carousel</NavLink></li>
            <li><NavLink to="/panel">Panel information</NavLink></li>
            <li><NavLink to="/panelright">Panel information right</NavLink></li>
            <li><NavLink to="/navbar">Navbar</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/carousel" component={Carousel}/>
          <Route path="/panel" component={Panel}/>
          <Route path="/panelright" component={PanelRight}/>
          <Route path="/navbar" component = {Navbar}/>
          </div>
        </div>
    </HashRouter>
    );
  }
}

export default Main;
