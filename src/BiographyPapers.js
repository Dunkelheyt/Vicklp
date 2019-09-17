import React, { Component } from "react";
import photo from "./vick.jpg";

class BiographyPapers extends Component{
  render(){
    return(
      <div>
      <div class ="container bg roundborder whiteborder">
        <div class="row text-center">
          <div class="col-sm-6">
            <img src={photo} alt="Principal" class = " rounded mx-auto d-bloc imgclass"/>
          </div>
          <div class="col-sm-6">
          <h2 class = "text-center">¿Quien soy?</h2>
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
      </div>
      </div>
    );
  }
}


export default BiographyPapers;
