import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import data from "./discodata.json";

class VickDisco extends React.Component{
  render() {
    return(
      <div class="container">
      <h1 class="text-center title imgbg"><Fade bottom>Discografía</Fade></h1>
      <Bounce bottom><hr/></Bounce>
      {data.map((postDetail, index)=>{
        return <div class = "clearfix borderscomplete container mb-3 whiteborder" >
        <div class = "row">
        <div class = "col-sm-6">
            <img class = "rounded mr-2 discc" src={postDetail.image} />
        </div>

        <div class = "col-sm-6">
          <h1 class="text-center">{postDetail.title}</h1>
          <hr/>
          <p class="text-center lead"><b>Fecha de lanzamiento:</b> {postDetail.date}</p>
          <p class="text-center lead"><b>Tipo de lanzamiento:</b><i> {postDetail.type}</i></p>
          <p class="text-center lead"><b>Número de canciones:</b> {postDetail.noTracks}</p>
          <p class="text-center lead"><b>Lista de canciones:</b></p>
          <ol>
          {postDetail.tracks.map((tracks, index)=><li class ="text-center">{tracks}</li>)}
          </ol>
        </div>

        </div>
        </div>
      })}
      </div>
    );
  }
}

export default VickDisco;
