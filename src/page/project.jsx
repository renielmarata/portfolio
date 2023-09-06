import "../style/projectStyle.css";
import { Stack } from "../asset/image";




const Project = () => {
    return ( 
        <div className=" w-100 h-100 d-flex flex-column" id="skill">
            <div id="techstack">
                <div className="imageWrapper">
                    <img src={Stack} alt="stack icon"/>
                </div>
                Projects
            </div>
            <div id="projectField">
                comming soon
            </div>
            <div id="projectField">
                comming soon
            </div>
            
        </div>  
     );
}
 
export default Project;