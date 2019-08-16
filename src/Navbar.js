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
        <button type="button" class="btn btn-outline-secondary">Menu</button>
      </button>
        <div class="collapse navbar-collapse justify-content-center sticky-top" id="navbar">
        <ul class="nav justify-content-center">
          <li class="nav-item  nav-justified">
            <button type="button" class="btn btn-outline-secondary"><NavLink to="/">Inicio</NavLink></button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary"><NavLink to="/stuff">Biografia</NavLink></button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary"><NavLink to="/videos">Videos</NavLink></button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Discografia</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Colaboraciones</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-outline-secondary">Contacto</button>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}


export default Navbar;
