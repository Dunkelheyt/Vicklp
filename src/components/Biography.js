import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import HorizontalTimeline from "react-horizontal-timeline";
import BiographyText from "./BiographyText";
import Title from "./Title";

const VALUES = [
  "2016/May/25",
  "2016/Nov/17",
  "2017/Aug/17",
  "2017/Nov/03",
  "2017/Nov/10",
  "2017/Nov/13",
  "2018/Oct/28",
  "2018/Dec/31",
  "2019/Apr/19",
  "2019/Jul/19",
  "2019/Aug/04"
];
const TextValues = [
  "Creación de la canción con el titulo de: “Do the same“ y planeación del EP llamado Circles.",
  "La canción de “Do the same“ es escogida de entre varios proyectos para ser interpretada en las presentaciones de fin de curso de la carrera de Profesional asociado en producción musical en la Universidad La Salle Noroeste.",
  "Realización de la canción de “SIDES“, canción instrumental que aparece en el EP Circles.",
  "Este día se compuso la canción de “Fire eater“, canción que aparece en el EP Circles.",
  "Este día se escribió y compuso la melodía de la canción “Reboot“, canción que aparece en el EP Circles.",
  "Se desarrolla el video musical de “SIDES“, dirigido por el Director Ricardo Valdez.",
  "Grabación con el grupo Altibajos con el tema de 'Gritar tu nombre“.",
  "Altibajos lanza la canción “Gritar tu nombre“ donde mi rol fue: productor, Ingeniero de mezcla y masterización.",
  "Se lanza el video musical de “SIDES“ a Youtube , el primer video oficial del canal.",
  "“Sweet  melody“ , canción que no pertenece al EP, es lanzada al público. Esta canción fue para promover más mi carrera de productor y hacer una canción con un genero distinto al que estoy acostumbrado.",
  "“Do the same“, el primer single del EP Circles, es lanzada al público. La canción que lo empezó todo; sale a la luz y es la 3er pieza musical que sale al público."
];
const reactElementsArray = TextValues.map(data => {
  return <p>{data}</p>;
});

class Biography extends Component {
  state = { value: 0, previous: 0 };
  render() {
    return (
      <div>
        <Title title="Biografia" />
        <div className="container">
          <div class="timelineLetters">
            <HorizontalTimeline
              index={this.state.value}
              indexClick={index => {
                this.setState({ value: index, previous: this.state.value });
              }}
              values={VALUES}
              styles={{
                background: "black",
                foreground: "red",
                outline: "white"
              }}
            />
          </div>
          <div className="text-left">
            <h2>
              <Slide bottom>{VALUES[this.state.value]}</Slide>
              <hr />
            </h2>
            <p>
              <Slide bottom>{reactElementsArray[this.state.value]}</Slide>
            </p>
          </div>
        </div>

        <div class="banner"></div>

        <Title title="Sobre mi" />
        <div className="container">
          <BiographyText />
        </div>
      </div>
    );
  }
}

export default Biography;
