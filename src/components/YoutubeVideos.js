import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import data from "./../json/videodata.json";

class YoutubeVideos extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <h1 class="text-center title imgbg">
            <Fade bottom>Videos</Fade>
          </h1>
          <Bounce bottom>
            <hr />
          </Bounce>
          <div class="row align-items-start">
            {data.map((postDetail, index) => {
              return (
                <Slide bottom>
                  <div>
                    <div class="col-4 ">
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
