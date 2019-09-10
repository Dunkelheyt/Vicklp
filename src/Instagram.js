import React, { Component} from 'react';
import InstagramEmbed from 'react-instagram-embed';

class Instagram extends Component{
  render(){
    return(
      <InstagramEmbed
      url='https://www.instagram.com/p/B2GQtOApsxL/'
      maxWidth={undefined}
      hideCaption={false}
      containerTagName='div'
      injectScript
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
    );
  }
}


export default Instagram;
