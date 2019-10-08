import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

class Title extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center title imgbg">
            <Fade bottom>{this.props.title}</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>
        </div>
      </div>
    );
  }
}

export default Title;
