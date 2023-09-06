import "../style/homeStyle.css";
import { Facebook, Gmail, Twitter, Linkedin } from "../asset/image";


const Home = () => {
    return ( 
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center" id="home">
            <div className="textContainer mb-5 d-flex flex-column align-items-center">
                <h1 className="header mb-4"> Hi, I'm <span className="name">Reniel Marata</span></h1>
                <h4 className="subHeader mb-5"><span className="a">a</span> Frontend Developer</h4>
                <h4 className="text">
                I specialize in creating dynamic and user-friendly websites and web <br/>
                applications. With a strong foundation in HTML , CSS, and JavaScript, <br/>
                I craft digital experiences that not only look stunning but also function <br/>
                seamlessly.
                </h4>
            </div>
            <div className="mt-5">
                <p className="text-center">Let's Talk</p>
                <div className="d-flex gap-4" id="socialMediaContainer">
                    <a href="https://www.facebook.com/reniel.marata.1?mibextid=9R9pXO" target="_blank"><img src={Facebook} alt="facebook"/></a>
                    <a href="mailto:renielmarata1@gmail.com" target="_blank"><img src={Gmail} alt="Gmail"/></a>
                    <img src={Linkedin} alt="Linkedin"/>
                    <img src={Twitter} alt="Twitter"/>
                </div>
            </div>
        </div>
     );
}
 
export default Home;