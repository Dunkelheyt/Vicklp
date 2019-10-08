import React, { Component } from "react";
import Slide from "react-reveal/Slide";
import HorizontalTimeline from "react-horizontal-timeline";
import BiographyText from "./BiographyText";
import Title from "./Title";

const VALUES = ["2019/April/19", "2019/Jul/19", "2019/Aug/04"];
const TextValues = [
  "En este dia se lanzo el Single de " +
    "SIDES" +
    " que con el cual se conto con la bla bla bla, meter relleno",
  "En este dia se lanzo el Single de " +
    "Sweet Melody" +
    " que con el cual se conto con la bla bla bla, meter relleno",
  "En este dia se lanzo el Single de " +
    "Do the same" +
    " que con el cual se conto con la bla bla bla, meter relleno"
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

        <Title title="Sobre mi" />
        <div className="container">
          <BiographyText />
        </div>
      </div>
    );
  }
}

export default Biography;
