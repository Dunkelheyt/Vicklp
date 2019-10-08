import React from "react";
import Slide from "react-reveal/Slide";
import Title from "./Title";
import data from "./../json/videodata.json";

class YoutubeVideos extends React.Component {
  render() {
    return (
      <div>
        <Title title="Videos" />
        <div class="container">
          <div class="row align-items-start">
            {data.map((postDetail, index) => {
              return (
                <Slide bottom>
                  <div>
                    <div class="col-sm-6 col-md-6 col-lg-4">
                      <iframe
                        class="youtubevid whiteborder"
                        src={postDetail.id}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title={postDetail.alt}
                      ></iframe>
                      <p class="">{postDetail.name}</p>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeVideos;
