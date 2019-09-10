import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Contact extends Component {
  render() {
    return (
      <div class = "container">
        <h1 class="text-center title tracking-in-contract borders"><Fade bottom>Contacto</Fade></h1>
        <p><Fade bottom>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius urna faucibus nisi mollis, in ultrices nibh aliquam.
         Vestibulum vel dolor non ex auctor vulputate vitae a nisi.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius urna faucibus nisi mollis, in ultrices nibh aliquam.
          Vestibulum vel dolor non ex auctor vulputate vitae a nisi.
         Pellentesque posuere nisi at rhoncus cursus. Pellentesque consequat dui ipsum, et fermentum magna sodales dapibus. </Fade></p>

         <Fade bottom>
        <form method="POST" action="https://formspree.io/dalmadxx@gmail.com">
        <div class="form-group">
          <label for="exampleFormControlInput1">Nombre completo:</label>
          <input class="form-control" id="exampleFormControlInput1" type="email" name="name" placeholder="Victor Larraguibel"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Correo Electronico:</label>
          <input type="email" class="form-control" id="exampleFormControlInput2" type="email" name="email" placeholder="tucorreo@aqui.com"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Tema:</label>
          <select class="form-control" id="exampleFormControlSelect1" name="theme">
            <option>Masterización</option>
            <option>Algo</option>
            <option>Algo</option>
            <option>Algo</option>
            <option>Algo</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Escribe aqui tu comentario:</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Test Message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      </Fade>
      </div>
    );
  }
}

export default Contact;
