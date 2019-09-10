import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

class FacebookPage extends Component{
  render(){
    return(
      <FacebookProvider appId="885153961635207">
        <Page href="https://www.facebook.com/VickLePonceMusic/" tabs="timeline" />
      </FacebookProvider>
    );
  }
}

export default FacebookPage;
