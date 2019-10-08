import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

class TwitterTimeline extends Component {
  render() {
    return (
      <div className="noOverflow">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Dunkelheyt"
          options={{ height: 500 }}
        />
      </div>
    );
  }
}

export default TwitterTimeline;
