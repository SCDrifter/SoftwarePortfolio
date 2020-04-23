import RobotImg from './Robot.jpeg'
import SelfImg from "./Self.png"

var Profiles = [
    {
        Title: "Hyperwave Eve-Mail Client",
        Type:"Desktop application",
        Image:"https://raw.githubusercontent.com/SCDrifter/Hyperwave/master/Doc/MailViewSmall.png",
        Description:"This is a Eve-Mail Client for the Game Eve Online. Eve-Mail is a communication system in game that is similar to E-Mail."+
                    "This app can recieve and compose messages using multiple text styles and colors.",
        Tech: [
            "C#",
            "WPF Framework",
            "Rest API",
            "C++/Win32",
            "Python with Flask"
        ],
        SourceCode:"https://github.com/SCDrifter/Hyperwave",
        Demo:"https://github.com/SCDrifter/Hyperwave/releases/download/v1.0.0/Hyperwave-1.0.0.exe"
    },
    {
        Title:"Mobile Camera Platform",
        Type:"Embedded Program/Electronics Project",
        Image: RobotImg,
        Description:"This is a mobile camera bot. It is powered by a Raspberry Pi 3B+ computer and is controlled via a web interface "+
                    "from any device over wifi. In the future it will be able to be controlled over the internet to look around the home remotely."+
                    "The device performs other tasks when not in operation",
        Tech:[
            "C++",
            "Python(Used for Web UI)",
            "HTML"
        ],
        Disclaimer: "To protect my privacy, the source code for this project will only be given upon request.",
        MoreInfo: "https://deadmeatsprojectbox.blogspot.com/2019/10/the-robot.html"
    },
    {
        Title:"Personal Portfolio",
        Type:"Website",
        Image: SelfImg,
        Description:"This website was created using ReactJS to demonstrate my skills and as a means of learning React.js."+
                    "It is also compatible with mobile devices.",
        Tech: [
            "Javascript",
            "HTML",
            "ReactJS"
        ],
        SourceCode:"https://github.com/SCDrifter/SoftwarePortfolio"        
    }

];

export default Profiles;