import React, { Component } from "react";
import ScrollUpButton from "react-scroll-up-button";


class ScrollUpBtn extends Component{
  render(){
    return(
      <div>
      <ScrollUpButton
        EasingType="easeInCubic"
        AnimationDuration={510}
      />
      </div>
    );
  }
}

export default ScrollUpBtn;
