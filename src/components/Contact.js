import React, { Component } from 'react'
import {FaRegGrinHearts} from "react-icons/fa"
export default class Contact extends Component {
    state={
        name:"",
        email:"",
        subject:"",
        message:""
    };
     set_data=(e)=>
        {
            e.preventDefault();
         this.setstate({[e.target.name]:e.target.value})
         console.log(this.state.name);
        }
    render() {
       
        return (
            <React.Fragment>
                <h4 style={{marginTop:"40px",fontSize:"30px"}} className="text-center">Connect with me</h4>
                   <div className="card col-lg-4 col-md-6 col-12 card-control" style={{width:"30rem"}}>
                       <div className="card-body">
                           <form onSubmit={this.set_data}>

                               <label for="name-control">Full name </label>
                               <input type="text" className="name-control form-control" name="name" ></input>
                        
                               <label for="name-control">Email </label>
                               <input type="email" className="name-control form-control" name="email"></input>
                        
                               <label for="name-control">subject</label>
                               <input type="text" className="name-control form-control" name="subject"></input>
                        
                               <label for="name-control">message</label>
                               <textarea className="name-control form-control" name="message"></textarea>
                        
                               <button type="submit">send</button>
                           </form>
                           
                       </div>
                   </div>

                   <div className="card col-lg-6 col-md-6 col-12 footer">
                       <div className="card-body">
                            <h5>NITIN KUMAR SAHU</h5>
                            <p href="#/" className="text-lowercase">nitinkusahu99.ns@gmail.com</p>
                            <address>ramward pathariya road, garhakota,sagar madhya pradesh
                                pin:470229
                            </address>
                            <p>+91 7440256986</p>
                       </div>
                   </div>

 
              <h6 className="text-center">made by <FaRegGrinHearts/> nitin kumar sahu</h6>
            </React.Fragment>
        )
    }
}
