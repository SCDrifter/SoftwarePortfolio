import React from 'react';
import "./ProfilePanel.css"

import GitHubIcon from "./GitHub.png";
import LiveDemoIcon from "./Demo.svg";
import InfoIcon from "./Info.svg";

class SourceLinks extends React.Component {
    render() {
        var state = {firstItem: true};
        return (
            <div class="LinkList">            
                {this.getSourceLink(state)}
                {this.getDemoLink(state)}
                {this.getInfoLink(state)}
            </div>
        );
    } 

    createLink(image,text,url) {
        return (
            <a href = {url} class="LinkIcon">
                <img src={image} alt=""/>
                <span>{text}</span>
            </a>
        );
    }

    createSeperator(state) {
        if(!state.firstItem)
            return <div class="LinkSeperator"/>
        else
        {
            state.firstItem = false;
            return null;
        }
    }
    
    getSourceLink(state) {
        if(this.props.source != null)
            return [this.createSeperator(state),this.createLink(GitHubIcon,"Source Code",this.props.source)];
    }

    getDemoLink(state) {
        if(this.props.demo != null)
            return [this.createSeperator(state),this.createLink(LiveDemoIcon,"Demo",this.props.demo)];
    }

    getInfoLink(state) {
        if(this.props.info != null)
            return [this.createSeperator(state),this.createLink(InfoIcon,"More Information",this.props.info)];
    }
}

class ProfilePanel extends React.Component {
    render() {
        return (
            <div class="Profile">
                <div class="Rows">
                    <div class="Spaced CenterText">
                        <div class="Title">{this.props.profile["Title"]}</div>
                        <div class="SubTitle">{this.props.profile["Type"]}</div>
                    </div>
                    <div class="Columns">
                        <img src={this.props.profile["Image"]} alt={this.props.profile["Title"]}  class="Spaced"/>
                        <div class="Seperator">&nbsp;</div>
                        <div class="Rows Spaced">
                            <header>Description</header>
                            <p>{this.props.profile["Description"]}</p>
                            <header>Technology Used</header>
                            <ul>
                                {this.getTech()}
                            </ul>
                            
                            <SourceLinks source={this.props.profile["SourceCode"]} demo={this.props.profile["Demo"]} info={this.props.profile["MoreInfo"]}/>
                            {this.getDisclaimer()}
                        </div>
                    </div>                
                </div>
            </div>
        );
    }
    getDisclaimer() {
        if(this.props.profile["Disclaimer"] !== undefined)
            return (
                <div class="Disclaimer">
                    {this.props.profile["Disclaimer"]}
                </div>
            )
    }


    getTech() {
        var ret = [];
        var techlist = this.props.profile["Tech"]
        for(let i = 0; i < techlist.length;i++)
        {
            var item = techlist[i];
            ret.push(<li>{item}</li>);
        }
        return ret;
    }

}

export default ProfilePanel;