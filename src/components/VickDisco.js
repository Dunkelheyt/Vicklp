import React from "react";
import Fade from "react-reveal/Fade";
import Title from "./Title";
import data from "./../json/discodata.json";

class VickDisco extends React.Component {
  render() {
    return (
      <div className="container">
        <Title title="Discografia" />
        {data.map((postDetail, index) => {
          return (
            <Fade bottom>
              <div className="clearfix borderscomplete container mb-3 whiteborder">
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      className="rounded mr-2 discc"
                      src={postDetail.image}
                      alt={postDetail.alt}
                    />
                  </div>

                  <div className="col-sm-6">
                    <h1 className="text-center">{postDetail.title}</h1>
                    <hr />
                    <p className="text-center lead">
                      <b>Fecha de lanzamiento:</b> {postDetail.date}
                    </p>
                    <p className="text-center lead">
                      <b>Tipo de lanzamiento:</b>
                      <i> {postDetail.type}</i>
                    </p>
                    <p className="text-center lead">
                      <b>Número de canciones:</b> {postDetail.noTracks}
                    </p>
                    <p className="text-center lead">
                      <b>Lista de canciones:</b>
                    </p>
                    <ol>
                      {postDetail.tracks.map((tracks, index) => (
                        <li className="text-center">{tracks}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default VickDisco;
