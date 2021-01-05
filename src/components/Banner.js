import React, { Component } from 'react' ;
import {FaFacebookF,FaTwitter,FaLinkedin,FaInstagram,FaHackerrank} from 'react-icons/fa';
export default class Banner extends Component {
    state={
        name:"NITIN KUMAR SAHU",
        about:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print"
    };
    render() {
        return (
            <header className="banner-header col-12" >
                 <div className="container col-12">
                     <div className="row">
                         <div className="header__content">
                         <div className="col-6">
                             <ul className="header__ul">
                                 <li className="facebook"><FaFacebookF/></li>
                                 <li className="twitter"><FaTwitter/></li>
                                 <li className="linkedin"><FaLinkedin/></li>
                                 <li className="instagram"><FaInstagram/></li>
                                 <li className="hackerrank"><FaHackerrank/></li>       
                             </ul>
                             <h1 >{this.state.name}</h1>
                             <p className="text-break" >{this.state.about}</p>
                             <button className="btn btn-outline-primary" style={{color:"white"}}>about me</button>
                         </div>
                         </div>
                     </div>

                 </div>
            </header>
        )
    }
}
