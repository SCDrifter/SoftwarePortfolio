import React from 'react';
import './App.css';
import Profiles from './ProfileList';
import ProfilePanel from './ProfilePanel'
import Footer from './Footer'
import GitHubIcon from "./GitHub.png";

class App extends React.Component {
  render() {
    return (
      <div class="App">
        <div class="Title">Portfolio</div>
        <div class="SubTitle">{this.getName()}</div>
        <Footer/>
        {this.getProfiles()}
        <div class="Copyright">
          <p>
            "<a rel="nofollow" href="https://commons.wikimedia.org/wiki/File:Toronto_Night.jpg">Toronto Night</a>" 
            by <a rel="nofollow" href="https://commons.wikimedia.org/wiki/User:S23678">Martin St-Amant</a>
            , used under <a rel="nofollow" href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY</a> / Shrunk image and applied blur effect
          </p>
          <p><img src={GitHubIcon} height="12px" alt=""/> GitHub Mark &copy; 2020 GitHub, Inc.</p>
          <p>All other content &copy; 2020 Michael-Paul Jakovlevski</p>
        </div>
      </div>      
    );
  }

  getName() {
    return atob("TWljaGFlbC1QYXVsIEpha292bGV2c2tp")
  }

  getProfiles()  {
    var ret = [];
    for(let i = 0;i < Profiles.length;i++) {
      ret.push(<ProfilePanel profile={Profiles[i]}/>);
    }

    return ret;
  }
}

export default App;
