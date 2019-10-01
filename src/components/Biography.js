import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import HorizontalTimeline from "react-horizontal-timeline";
import BiographyText from "./BiographyText";

const VALUES = [
  "1993/May/01",
  "1993/May/06",
  "1993/Jan/06",
  "2000-05-05",
  "2005-05-05",
  "2010-05-05",
  "2019-05-05"
];
const TextValues = [
  "Primero",
  "Segundo",
  "Tercero",
  "Cuarto",
  "Quinto",
  "Sexto",
  "Septimo"
];
const reactElementsArray = TextValues.map(data => {
  return <p>{data}</p>;
});

class Biography extends Component {
  state = { value: 0, previous: 0 };
  render() {
    return (
      <div>
        <div className="container">
          <h1 class="text-center title imgbg">
            <Fade bottom>Biografia</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>

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
            <h1>
              <Slide bottom>{VALUES[this.state.value]}</Slide>
              <hr />
            </h1>
            <p>
              <Slide bottom>{reactElementsArray[this.state.value]}</Slide>
            </p>
          </div>
        </div>

        <div class="banner"></div>

        <div className="container">
          <h1 class="text-center title imgbg">
            <Fade bottom>Sobre mi</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>
          <BiographyText />
        </div>
      </div>
    );
  }
}

export default Biography;
