import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import JumbotronVideo from "./components/JumbotronVideo";
import YoutubeVideos from "./components/YoutubeVideos";
import VickDisco from "./components/VickDisco";
import Collabs from "./components/Collabs";
import ScrollUpBtn from "./components/ScrollUpBtn";

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <JumbotronVideo />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/bio" component={Biography} />
            <Route path="/videos" component={YoutubeVideos} />
            <Route path="/disco" component={VickDisco} />
            <Route path="/colaboraciones" component={Collabs} />
            <Route path="/contacto" component={Contact} />
          </div>
          <ScrollUpBtn />
        </div>
      </HashRouter>
    );
  }
}

export default Main;
