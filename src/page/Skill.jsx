import "../style/skillStyle.css";
import { HTML, CSS, JavaScript, React, Redux, Jquery, Npm, Vite, Bootstrap, Tailwind, PYTHON, NODEJS, PHP, REDIS, MongoDB, PhpMyAdmin, Stack } from "../asset/image";



const Skill = () => {
    return ( 
        <div className=" w-100 h-100 d-flex flex-column" id="skill">
            <div id="techstack">
                <div className="imageWrapper">
                    <img src={Stack} alt="stack icon"/>
                </div>
                TechStack
            </div>
            <div className="" id="clientContainer">
                <h1>Client-Side Container</h1>
                <div className="d-flex gap-5" id="iconContainer">
                    <div className="iconWrapper"> <img src={HTML} alt="html icon"/> <p className="iconName">HTML</p> </div>
                    <div className="iconWrapper"> <img src={CSS} alt="css icon"/> <p className="iconName">CSS</p> </div>
                    <div className="iconWrapper"> <img src={JavaScript} alt="JavaScript icon"/> <p className="iconName">JavaScript</p> </div>
                    <div className="iconWrapper"> <img src={React} alt="react icon"/> <p className="iconName">React JS</p> </div>
                    <div className="iconWrapper"> <img src={Redux} alt="css icon"/> <p className="iconName">Redux</p> </div>
                    <div className="iconWrapper"> <img src={Jquery} alt="jquery icon"/> <p className="iconName">Jquery</p> </div>
                    <div className="iconWrapper"> <img src={Npm} alt="npm icon"/> <p className="iconName">NPM</p> </div>
                    <div className="iconWrapper"> <img src={Vite} alt="vite icon"/> <p className="iconName">Vite</p> </div>
                    <div className="iconWrapper"> <img src={Bootstrap} alt="bootstrap icon"/> <p className="iconName">Bootstrap</p> </div>
                    <div className="iconWrapper"> <img src={Tailwind} alth="tailwind icon"/> <p className="iconName">Tailwind</p> </div>
                </div>
            </div>
            <div id="serverContainer">
                <h1>Server-Side Container</h1>
                <div className="d-flex gap-5" id="iconContainer">
                    <div className="iconWrapper"> <img src={PHP} alt="php icon"/> <p className="iconName">PHP</p> </div>
                    <div className="iconWrapper"> <img src={PYTHON} alt="python icon"/> <p className="iconName">Python</p> </div>
                    <div className="iconWrapper"> <img src={NODEJS} alt="nodeJS icon"/> <p className="iconName">nodeJS</p> </div>
                </div>
            </div>
            <div id="databaseContainer">
                <h1>Database & query</h1>
                <div className="d-flex gap-5" id="iconContainer">
                    <div className="iconWrapper"> <img src={REDIS} alth="redis icon"/> <p className="iconName">Redis</p></div>
                    <div className="iconWrapper"> <img src={PhpMyAdmin} alth="mysql icon"/> <p className="iconName">mySQL</p></div>
                    <div className="iconWrapper"> <img src={MongoDB} alth="mongoDB icon"/> <p className="iconName">mongoDB</p></div>
                </div>
            </div>
        </div>  
     );
}
 
export default Skill;