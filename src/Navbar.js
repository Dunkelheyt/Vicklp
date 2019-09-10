import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Navbar extends Component{
  render(){
    return(
      <div class="container">
      <nav class="navbar navbar-expand-lg justify-content-center">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <button type="button" class="btn btn-dark boxshadow">Menu</button>
      </button>
        <div class="collapse navbar-collapse justify-content-center sticky-top" id="navbar">
        <ul class="nav justify-content-center">
          <NavLink to="/"><li class="nav-item  nav-justified">
            <button type="button" class="btn btn-dark boxshadow">Inicio</button>
          </li></NavLink>
          <NavLink to="/bio"><li class="nav-item">
            <button type="button" class="btn btn-dark boxshadow">Biografia</button>
          </li></NavLink>
          <NavLink to="/videos"><li class="nav-item">
            <button type="button" class="btn btn-dark boxshadow">Videos</button>
          </li></NavLink>
          <NavLink to="/disco"><li class="nav-item">
            <button type="button" class="btn btn-dark boxshadow">Discografia</button>
          </li></NavLink>
          <li class="nav-item">
            <button type="button" class="btn btn-dark boxshadow">Colaboraciones</button>
          </li>
          <NavLink to="/contacto"><li class="nav-item">
            <button type="button" class="btn btn-dark boxshadow">Contacto</button>
          </li></NavLink>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}


export default Navbar;
