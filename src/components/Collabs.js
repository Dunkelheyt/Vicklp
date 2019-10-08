import React, { Component } from "react";
import Title from "./Title";
import Fade from "react-reveal/Fade";
import data from "./../json/collabdata.json";

class Collabs extends Component {
  render() {
    return (
      <div className="container">
        <Title title="Colaboraciones" />
        {data.map((postDetail, index) => {
          return (
            <Fade bottom>
              <div className="clearfix borderscomplete container mb-3 whiteborder">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <img
                      className="rounded mr-2 discc"
                      src={postDetail.image}
                      alt={postDetail.alt}
                    />
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <h1 className="text-center ">{postDetail.title}</h1>
                    <hr />
                    <p>{postDetail.info}</p>
                    <a href={postDetail.link}>{postDetail.info2}</a>
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

export default Collabs;
