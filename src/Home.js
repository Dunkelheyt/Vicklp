import React, { Component } from "react";
import Panel from './Panel';
import PanelRight from "./PanelRight";

class Home extends Component {
  render() {
    return (
      <div>
        <Panel title="Biografia" bullshit="23s5daf4g3265sd4fg5234sdfg325sd4fg32sd4f3g254sdfg324"/>
        <PanelRight/>
        <Panel title="Titulo?" bullshit="lmaokai"/>
      </div>
    );
  }
}

export default Home;
