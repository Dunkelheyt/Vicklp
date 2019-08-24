import React, { Component } from "react";
import photo from "./vick.jpg";
import placeholder from "./placeholder.jpg";

class Biography extends Component {
  render() {
    return (
      <div>
        <div class ="container">
          <h1 class ="text-center">Biografia</h1>
          <h2 class = "text-center">¿Quien soy?</h2>
          <div class ="text-center">
            <img src={photo} class = " rounded mx-auto d-bloc imgclass"/>
          </div>
          <p>The Fizz Keeper is a device that is sold as a means for preserving the carbonation in soft drinks. It comprises a small hand pump that screws onto the top of a plastic soft drink bottle, which is used to pump air into the bottle.
          Pressurizing the bottle in this way, it is claimed by most of those who sell the device, prevents the drink from going flat.
          Fizz Keeper.
          As Joseph A. Schwarcz, Brian Rohrig (of Eastmoor Academy), John P. Williams (of Miami University Hamilton), Sandy Van Natta, Rebecca Knipp, and Reed A. Howald all explain,
          the mechanism does not, in fact, operate in this fashion because of Henry's Law and Dalton's Law.</p>
        </div>
      <div class="banner"></div>
      <div class ="container">
        <h2 class = "text-center">Influencias</h2>
        <div class ="text-center">
          <img src={photo} class = " rounded mx-auto d-bloc imgclass"/>
        </div>
        <p>Desde que tengo memoria la música siempre me ha llamado la atención quizás será por que mis papas escuchan todo el tiempo música y desde chico siempre escuchaba lo que ellos,
        asi que mis primeros grupos que yo escuchaba era Ricky Martin, Sin bandera , Chayanne por parte de mi mamá y música clásica por parte de mi papa, sin embargo la primera influencia musical que tuve fue Mago de oz ,
        grupo de folk metal de España, fue quizá la combinación de guitarras eléctricas con violines lo que más me llamaba la atención ni hablar de la voz de Jose Andrea.

        Hoy en dia escucho de todo un poco me gusta escuchar música que a mis amigos les gusta ya que cada quien tiene diferentes gustos y siempre me gusta saber por que les gusta escuchar esa canción o tal ,
        todo esto con la finalidad de entender más el genero y creo que hasta empiezas apreciarlo no obstante me fascina el rock alternativo  y el rock indie
        Soy fan de Foo fighters, Foster the Peolple, Los Mesoneros.</p>
      </div>
      <div class="banner"></div>
      <div class ="container">
        <h2 class = "text-center">Habilidades</h2>
        <div class ="text-center">
          <img src={photo} class = " rounded mx-auto d-bloc imgclass"/>
        </div>
        <p>Desde que tengo memoria la música siempre me ha llamado la atención quizás será por que mis papas escuchan todo el tiempo música y desde chico siempre escuchaba lo que ellos,
        asi que mis primeros grupos que yo escuchaba era Ricky Martin, Sin bandera , Chayanne por parte de mi mamá y música clásica por parte de mi papa, sin embargo la primera influencia musical que tuve fue Mago de oz ,
        grupo de folk metal de España, fue quizá la combinación de guitarras eléctricas con violines lo que más me llamaba la atención ni hablar de la voz de Jose Andrea.</p>
        <div class="row text-center">
          <div class ="col">
          <ol>
           <li>Comida</li>
           <li>Comida</li>
           <li>Comida</li>
           <li>Comida</li>
          </ol>
          </div>
          <div class ="col">
          <ol>
           <li>Comida</li>
           <li>Comida</li>
           <li>Comida</li>
           <li>Comida</li>
          </ol>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Biography;
