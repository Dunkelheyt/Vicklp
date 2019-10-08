import React, { Component } from "react";
import MiddlePanel from "./MiddlePanel";
import FacebookPage from "./social/FacebookPage";
import Instagram from "./social/Instagram";
import TwitterTimeline from "./social/TwitterTimeline";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import Title from "./Title";
import conoceme from "./../img/conoceme.jpg";
import contacto from "./../img/office.jpg";
import disco from "./../img/disco.jpg";
import video from "./../img/video.jpg";
import collab from "./../img/collab.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Title title="Inicio" />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Fade bottom>
                <NavLink to="/bio">
                  <MiddlePanel url={conoceme} text="Biografia" />
                </NavLink>
              </Fade>
            </div>
            <div className="col-sm-6">
              <Fade bottom>
                <NavLink to="/colaboraciones">
                  <MiddlePanel url={collab} text="Colaboraciones" />
                </NavLink>
              </Fade>
            </div>
          </div>
          <div className="row justify-content-sm-center">
            <Fade bottom>
              <div className="col-sm-6">
                <NavLink to="/contacto">
                  <MiddlePanel url={contacto} text="Contacto" />
                </NavLink>
              </div>
            </Fade>
          </div>
        </div>

        <div className="banner"></div>

        <Title title="Trayectoria" />
        <div className="container">
          <div className="row">
            <Fade bottom>
              <div className="col-sm-6">
                <NavLink to="/disco">
                  <MiddlePanel url={disco} text="Discografia" />
                </NavLink>
              </div>
            </Fade>
            <Fade bottom>
              <div className="col-sm-6">
                <NavLink to="/videos">
                  <MiddlePanel url={video} text="Videos" />
                </NavLink>
              </div>
            </Fade>
          </div>
        </div>

        <div className="banner"></div>

        <Title title="Servicios" />
        <div className="container">
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

        <Title title="Social" />
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <p className="text-center">Facebook</p>
              <FacebookPage />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <p className="text-center">Twitter</p>
              <TwitterTimeline />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <p className="text-center">Instagram</p>
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
