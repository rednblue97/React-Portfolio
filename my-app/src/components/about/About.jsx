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
                An avid enthusiast of National Parks who recently accomplished a full stack coding bootcamp,
                blending your passion for nature with newfound skills in software development.
        </p>
        <p className="a-desc">
        Throughout my coding bootcamp journey, I found immense joy in collaborating with my classmates, fostering a supportive and dynamic learning environment. 
        Together, we explored various programming concepts, tackling challenges head-on and expanding our knowledge. The most rewarding part was translating our newfound expertise into building practical applications that have the potential to make a real impact in the world.
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