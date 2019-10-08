import React, { Component } from "react";

class MiddlePanel extends Component {
  render() {
    return (
      <div class="content text-center ">
        <figure class="figure ">
          <img
            src={this.props.url}
            class=" rounded imgthumb  zoom"
            alt="filler"
          />
          <p class="text-center marginTop">{this.props.text}</p>
        </figure>
      </div>
    );
  }
}

export default MiddlePanel;
