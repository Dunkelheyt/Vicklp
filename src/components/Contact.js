import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

class Contact extends Component {
  render() {
    return (
      <div class="container">
        <h1 class="text-center title borders imgbg">
          <Fade bottom>Contacto</Fade>
        </h1>
        <Bounce bottom>
          <hr />
        </Bounce>
        <p>
          <Fade bottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            varius urna faucibus nisi mollis, in ultrices nibh aliquam.
            Vestibulum vel dolor non ex auctor vulputate vitae a nisi. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius
            urna faucibus nisi mollis, in ultrices nibh aliquam. Vestibulum vel
            dolor non ex auctor vulputate vitae a nisi. Pellentesque posuere
            nisi at rhoncus cursus. Pellentesque consequat dui ipsum, et
            fermentum magna sodales dapibus.
          </Fade>
        </p>

        <Fade bottom>
          <form method="POST" action="https://formspree.io/dalmadxx@gmail.com">
            <div class="form-group">
              <label for="exampleFormControlInput1">
                <i>Nombre completo:</i>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                type="name"
                name="name"
                placeholder="Victor Larraguibel"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">
                <i>Correo Electronico:</i>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput2"
                ype="email"
                name="email"
                placeholder="tucorreo@aqui.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">
                <i>Tema:</i>
              </label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                name="theme"
              >
                <option>Producción / Masterización</option>
                <option>Mezcla de audio</option>
                <option>Grabación de Demo</option>
                <option>Diseño de sonido</option>
                <option>Grabación para Spot de Radio</option>
                <option>Composición</option>
                <option>Otro</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                <i>Escribe aqui tu comentario:</i>
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                placeholder="Escribenos tu comentario"
                name="message"
              ></textarea>
            </div>
            <button type="submit" class="btn NoMargin btn-dark boxshadow">
              <i>Enviar</i>
            </button>
          </form>
        </Fade>
      </div>
    );
  }
}

export default Contact;
