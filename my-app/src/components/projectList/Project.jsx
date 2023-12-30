import "../projectList/projects.css"
import DogAdopt from "../../img/Homepage.png"
import Bops from "../../img/bops.png"
import PassGen from "../../img/passgen.png"
import MYSQL from "../../img/MYSQL.JPG"
import TeamGen from "../../img/teamgen.JPG"
import OverUnder21 from "../../img/OverUnder21Home.JPG"


const ProjectList = () => {
    return ( 
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Let's get started!</h1>
                <p className="pl-desc">
                    Below you will find my recent projects that will show my tehcnical skills alongisde my collaborative work. Jump in.
                </p>
            </div>
            <div className="projectpic">
             <a href="https://stark-meadow-18260.herokuapp.com/" target="_blank" rel="noreferrer">
                <img src={DogAdopt} alt=""></img>
             </a>
             <a href ="https://lizedelman.github.io/bopsnbooze/" target="_blank" rel="noreferrer">
                        <img src={Bops} alt=""></img>
                    </a>
                    <a href="https://rednblue97.github.io/PasswordGenerator/" target="_blank" rel="noreferrer">
                        <img src={PassGen} alt=""></img>
                    </a>
                    <a href="https://over-under-21.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={OverUnder21} alt=""></img>
                    </a>
                    <a href="https://github.com/CaptureB/Employee-Tracker--Mysql" target="_blank" rel="noreferrer">
                        <img src={MYSQL} alt=""></img>
                    </a>
                    <a href="https://github.com/CaptureB/Team-Gen" target="_blank" rel="noreferrer">
                        <img src={TeamGen} alt=""></img>
                    </a>
            </div>
        </div>
    )
}

export default ProjectList