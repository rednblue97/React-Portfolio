import "../about/about.css"
import Overlook from "../../img/overlook.jpg"
import Badge from "../../img/badge.png"

const About = () => {
    return ( 
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="a-img"
                />
            </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
             It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-badge">
            <img src={Badge} alt="Badge" className="a-badge-img" />
            <div className="a-badge-text">
            <h4 className="a-badge-title">Full Stack Web Development 2023</h4>
            <p className="a-badge-desc">
            A rigorous 6 month program covering concepts such as HTML, CSS,
            to much more advanced topics such as React, JavaScript and deploying MERN stack applications.
            </p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About