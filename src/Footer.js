import React from "react"
import "./Footer.css"
import GitHub from "./GitHub.png";
import EMail from "./Email.svg";

class Footer extends React.Component {
    render() {
        return (
            <div class="Footer">
                <a href="https://github.com/SCDrifter" title="Github Profile"><img src={GitHub} alt="Github Profile"/></a>
                <a href={this.mailTo()} title="Send an E-Mail"><img src={EMail} alt="Email"/></a>
                
            </div>            
        );
    }

    mailTo() {
        return atob("bWFpbHRvOlRydXRoVGhlQW50aVZlbm9tQGdtYWlsLmNvbQ==");
    }
}

export default Footer;