import React, { Component } from "react";
import placeholder500300 from "./../img/ph500300.png";

class MiddlePanel extends Component {
  render() {
    return (
      <div class="content text-center ">
        <figure class="figure">
          <img
            src={placeholder500300}
            class="img-fluid rounded yellowborder zoom"
            alt="filler"
          />
          <p class="text-center marginTop">{this.props.text}</p>
        </figure>
      </div>
    );
  }
}

export default MiddlePanel;
