import "../style/navbarStyle.css";



const Navbar = () => {
    return ( 
        <div className="navbar py-5 d-flex justify-content-center" id="navBar">
            <div className="buttonContainer d-flex gap-md-5 gap-4" id="buttonContainer">
                <div><a className="homeButton text-decoration-none" href="/">Home</a></div>
                <div><a className="skillButton text-decoration-none" href="/skill">Skills</a></div>
                <div><a className="projectButton text-decoration-none" href="/project">Project</a></div>
                <div><a className="resumeButton text-decoration-none" target="_blank" href="https://drive.google.com/file/d/1gIkbm72u4dMZvw8Df7DAuobW3VcP9YZj/view">Resume</a></div>
            </div>
        </div>
     );
}
 
export default Navbar;