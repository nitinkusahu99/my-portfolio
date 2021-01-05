import React, { Component } from 'react'
import {FaFacebookF,FaTwitter,FaLinkedin,FaInstagram,FaHackerrank} from 'react-icons/fa';

export default class Newbanner extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="banner-header">
                <div className="container col-lg-6 col-md-6 col-12">
                    <div className="row">
                       <ul className="media-element">
                           <li className="facebook" onClick={()=>window.open("https://www.facebook.com/")}><FaFacebookF/></li>
                           <li  className="twitter"><FaTwitter/></li>
                           <li className="linkedin" onClick={()=>window.open("https://www.linkedin.com/in/nitin-kumar-sahu-894040195")}><FaLinkedin/></li>
                           <li  className="instagram" ><FaInstagram/></li>
                           <li  className="hackerrank" onClick={()=>window.open("https://www.hackerrank.com/nitinlogan1999")}><FaHackerrank/></li>
                       </ul>
                    </div>
                    <h1 className="name-color">NITIN KUMAR SAHU</h1>
                    <p className="p_color">hello! i like to learn new thing and improve ourself.i'm pretty intrested in web devlopment.</p>
                </div>
          
            </header>
            </React.Fragment>
        )
    }
}
