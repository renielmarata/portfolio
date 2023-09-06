import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Skill, Project } from "./page";
import { Navbar } from "./component";



const App = () => {
    return ( 
        <Router>
            <div className="vw-100 vh-100 d-flex flex-column">
                <Navbar/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/skill">
                        <Skill/>
                    </Route>
                    <Route path="/project">
                        <Project/>
                    </Route>
                </Switch>
            </div>
        </Router>
     );
}
 
export default App;