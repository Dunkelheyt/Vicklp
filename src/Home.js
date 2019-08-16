import React, { Component } from "react";
import Panel from './Panel';
import PanelRight from "./PanelRight";

class Home extends Component {
  render() {
    return (
      <div>
        <Panel title="Titulo?" bullshit="lmaokai"/>
        <PanelRight/>
        <Panel title="Titulo?" bullshit="lmaokai"/>
      </div>
    );
  }
}

export default Home;
