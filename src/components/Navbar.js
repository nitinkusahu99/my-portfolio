import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Aboutme from "../components/Aboutme"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import {FaAlignJustify} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import pdf from "/home/nitin/Desktop/my portfolio/my-portfolio/src/Documents/NITIN_FrontEnd_Dev.pdf"
 const Navbar=()=> {
    
   
        const [state, setstate] = React.useState(true);
       
        return (
            <React.Fragment>
                <Router>
                <nav className="navbar col-12">
                    <div className="container">
                       <div className="navbar__container">
                          <ul className="navbar__left">
                            <div className="navbar__left-logo">
                                <a href="#/">PORTFOLIO</a>
                            </div>
                          </ul>
                        {state?(
                            <ul className="navbar__right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href={pdf}>resume</a></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            
                            
                        </ul>
                        ):("")}
                       </div>
                    </div>
                    <div className="toggle" onClick={()=>setstate(!state)}><FaAlignJustify/></div>
                </nav>
                <Switch>
                    <Route path="/about"><Aboutme/></Route>
                    <Route path="/projects"><Projects/></Route>
                    <Route path="/contact"><Contact/></Route>
                </Switch>
                </Router>
            </React.Fragment>
        )
    }

    export default Navbar;