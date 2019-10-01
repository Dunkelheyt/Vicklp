import React, { Component } from "react";
import MiddlePanel from "./MiddlePanel";
import FacebookPage from "./social/FacebookPage";
import Instagram from "./social/Instagram";
import TwitterTimeline from "./social/TwitterTimeline";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center title imgbg">
            <Fade bottom>Inicio</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <NavLink to="/bio">
                  <MiddlePanel text="Biografia" />
                </NavLink>
              </div>
              <div className="col-sm-6">
                <MiddlePanel text="Colaboraciones" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <NavLink to="/contacto">
                  <MiddlePanel text="Contacto" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="banner"></div>

        <div className="container">
          <h1 className="text-center title imgbg">
            <Fade bottom>Trayectoria</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>
          <div className="row">
            <div className="col-sm-6">
              <NavLink to="/disco">
                <MiddlePanel text="Discografia" />
              </NavLink>
            </div>
            <div className="col-sm-6">
              <NavLink to="/videos">
                <MiddlePanel text="Videos" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="banner"></div>
        <div className="container">
          <h1 className="text-center title imgbg">
            <Fade bottom>Servicios</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>
          <ul className="text-left">
            <Fade bottom>
              <li>
                <b>Producción completa de un tema</b>
              </li>
            </Fade>
            <Fade bottom>
              <ul>
                <li>
                  <i>
                    Abarca todo los procesos de la producción desde la
                    pre-producción hasta la masterización con el fin de entregar
                    un producto de calidad y que pueda competir en la industria
                    musical.
                  </i>
                </li>
              </ul>
            </Fade>
            <Fade bottom>
              <li>
                <b>Servicio de Mezcla de audio</b>
              </li>
            </Fade>
            <Fade bottom>
              <ul>
                <li>
                  <i>
                    Brindamos servicio de mezcla desde una canción, un disco ó
                    single musical.
                  </i>
                </li>
              </ul>
            </Fade>
            <Fade bottom>
              <li>
                <b>Grabación de Demo</b>
              </li>
            </Fade>
            <Fade bottom>
              <ul>
                <li>
                  <i>
                    Es una grabación de prueba de voz y de guitarra o de piano,
                    ideales para saber como sonará y así poder hacer ajustes e
                    ir avanzando al momento de grabar mas instrumentos.
                  </i>
                </li>
              </ul>
            </Fade>
            <Fade bottom>
              <li>
                <b>Diseño de sonido</b>
              </li>
            </Fade>
            <Fade bottom>
              <ul>
                <li>
                  <i>
                    Musicalización de un proyecto cinematográfico, comerciales,
                    y/ó cortometrajes.
                  </i>
                </li>
              </ul>
            </Fade>
            <Fade bottom>
              <li>
                <b>Grabación para Spot de Radio</b>
              </li>
            </Fade>
            <Fade bottom>
              <ul>
                <li>
                  <i>
                    Creación un spot de radio que ayude a marcas ó negocios a la
                    difusion del mismo y promoción por este medio.
                  </i>
                </li>
              </ul>
            </Fade>
            <Fade bottom>
              <li>
                <b>Compositor</b>
              </li>
            </Fade>
            <Fade bottom>
              <ul>
                <li>
                  <i>
                    Como compositor; ayudó al artista a organizar bien sus ideas
                    a la hora de componer y poder plasmar sus ideas en un tema
                    musical.
                  </i>
                </li>
              </ul>
            </Fade>
          </ul>
        </div>

        <div className="banner"></div>

        <div className="container">
          <h1 className="text-center title imgbg">
            <Fade bottom>Social</Fade>
          </h1>

          <Bounce bottom>
            <hr />
          </Bounce>
          <div className="row text-center">
            <div className="col-sm-4">
              <p className="text-center">Facebook</p>
              <FacebookPage />
            </div>
            <div className="col-sm-4">
              <p className="text-center">Instagram</p>
              <Instagram />
            </div>
            <div className="col-sm-4">
              <p className="text-center">Twitter</p>
              <TwitterTimeline />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
