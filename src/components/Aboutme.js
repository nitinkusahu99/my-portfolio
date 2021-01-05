import React, { Component } from 'react'

export default class Aboutme extends Component {
    render() {
        return (
            <React.Fragment>
                 <h1 className="about">About Me</h1>
                 <h5 style={{margin:"10px 20px"}} >Education</h5>
                 <div className="container col-lg-4 col-md-6 col-12 about-container">
                     <div className="card">
                        <div className="card-header">Graduation</div>
                        <div className="card-body">
                            <h5>LNCT GROUP OF COLLEGE, BHOPAL</h5>
                             <h6>B.Tech</h6>
                             <p>computer science and Engineering</p>
                             <p>Batch:2017-2021</p>
                             <p>cgpa:8.27/10</p>
                        </div>
                     </div>

                     <div className="card">
                        <div className="card-header">higher secondary(10th)</div>
                        <div className="card-body">
                            <h5>mp board</h5>
                             <p>year:2013-2014</p>
                             <p>parcentage:84.60%</p>
                        </div>
                     </div>


                     <div className="card">
                        <div className="card-header">higher school(12th)</div>
                        <div className="card-body">
                            <h5>mp board</h5>
                            <p>Physics Chemistry & Mathematics</p>
                             <p>year:2015-2016</p>
                             <p>parcentage:81.40%</p>
                        </div>
                     </div>
                 </div>


                 <h5 style={{margin:"10px 20px"}}>SKILLS</h5>
                 <div className="container col-lg-4 col-md-6 col-12">
                     

                     <div className="card">
                         <div className="card-body">
                            <ul>
                                <li> core java
                                <div className="progress">
                                       <div className="progress-bar" role="progressbar" style={{width:"55%"}}></div>
                                         </div>
                                </li>

                                <li> database management system
                                <div className="progress">
                                       <div className="progress-bar" role="progressbar" style={{width:"50%"}}></div>
                                         </div>
                                </li>

                                <li> sql
                                <div className="progress">
                                       <div className="progress-bar" role="progressbar" style={{width:"50%"}}></div>
                                         </div>
                                </li>

                                <li> php
                                <div className="progress">
                                       <div className="progress-bar" role="progressbar" style={{width:"30%"}}></div>
                                         </div>
                                </li>

                                <li> reactjs
                                <div className="progress">
                                       <div className="progress-bar" role="progressbar" style={{width:"30%"}}></div>
                                         </div>
                                </li>

                                <li> front-end devlopment
                                <div className="progress">
                                       <div className="progress-bar" role="progressbar" style={{width:"40%"}}></div>
                                         </div>
                                </li>

                            </ul>
                         </div>
                     </div>
                 </div>
            </React.Fragment>
        )
    }
}
