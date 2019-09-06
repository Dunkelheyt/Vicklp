import React, { Component } from "react";
import photo from "./vick.jpg";
import placeholder from "./placeholder.jpg";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  photo,
  photo,
  photo,
  photo,
  photo
];

class Biography extends Component {

  constructor(props) {
  super(props);

  this.state = {
    photoIndex: 0,
    isOpen: false,
  };
}
  render() {

    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <div class ="container">
          <h1 class ="text-center title">Biografia</h1>
          <h2 class = "text-center titleTop ">¿Quien soy?</h2>
          <div class="row text-left">
            <div class="col-sm-6">
              <img src={photo} class = " rounded mx-auto d-bloc imgclass" type="button" onClick={() => this.setState({ isOpen: true })}/>

              {isOpen && (
                <Lightbox
                  mainSrc={images[photoIndex]}
                  nextSrc={images[(photoIndex + 1) % images.length]}
                  prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + images.length - 1) % images.length
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % images.length
                    })
                  }
                />
              )}
            </div>
            <div class="col-sm-6">
              <p>The Fizz Keeper is a device that is sold as a means for preserving the carbonation in soft drinks. It comprises a small hand pump that screws onto the top of a plastic soft drink bottle, which is used to pump air into the bottle.
              Pressurizing the bottle in this way, it is claimed by most of those who sell the device, prevents the drink from going flat.
              Fizz Keeper.
              As Joseph A. Schwarcz, Brian Rohrig (of Eastmoor Academy), John P. Williams (of Miami University Hamilton), Sandy Van Natta, Rebecca Knipp, and Reed A. Howald all explain,
              the mechanism does not, in fact, operate in this fashion because of Henry's Law and Dalton's Law.
              As Joseph A. Schwarcz, Brian Rohrig (of Eastmoor Academy), John P. Williams (of Miami University Hamilton), Sandy Van Natta, Rebecca Knipp, and Reed A. Howald all explain,
              the mechanism does not, in fact, operate in this fashion because of Henry's Law and Dalton's Law.
              </p>
            </div>
          </div>
          <div class="row text-left">
          <div class="col-sm-3">
            <img src={photo} class = " imgclassmini rounded mx-auto d-bloc imgclass" type="button" onClick={() => this.setState({ isOpen: true })}/>
          </div>
          <div class="col-sm-3">
            <img src={photo} class = " imgclassmini rounded mx-auto d-bloc imgclass" type="button" onClick={() => this.setState({ isOpen: true })}/>
          </div>
          <div class="col-sm-3">
            <img src={photo} class = " imgclassmini rounded mx-auto d-bloc imgclass" type="button" onClick={() => this.setState({ isOpen: true })}/>
          </div>
          <div class="col-sm-3">
            <img src={photo} class = " imgclassmini rounded mx-auto d-bloc imgclass" type="button" onClick={() => this.setState({ isOpen: true })}/>
          </div>
        </div>
        </div>
          <div class="banner"></div>
      </div>
    );
  }
}

export default Biography;
