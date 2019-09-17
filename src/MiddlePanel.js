import React, {Component} from "react";
import placeholder300250 from "./300250.jpg";
import placeholder400300 from "./ph400300.png";
import placeholder500300 from "./ph500300.png";
import placeholder300300 from "./ph300300.png";

class MiddlePanel extends Component {
  render(){
    return(
      <div class="content text-center ">
        <figure class="figure">
        <img src={placeholder500300} class="img-fluid rounded yellowborder zoom"/>
        <p class ="text-center marginTop">{this.props.text}</p>
        </figure>
      </div>
    );
  }
}

export default MiddlePanel;
