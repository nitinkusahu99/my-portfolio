import React, { Component } from 'react'
import farmer_basket_img from "/home/nitin/Desktop/my portfolio/my-portfolio/src/images/farmer_basket.jpg"
import scholar_img from "/home/nitin/Desktop/my portfolio/my-portfolio/src/images/scholarship_img.jpg";
export default class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <h5 style={{margin:"10px 20px"}}>my projects</h5>
                    


<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={farmer_basket_img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">farmer basket</h5>
        1. It’s IVRS (Interactive voice response system) based.<br/>
                                2. Farmer connect with online medium without using smartphone atall.<br/>
                                3. We provide farmer to sell,buy their product.<br/>
                                4. Our twilio call support more than 25+ languages.<br/>
                                5. Simple interface that works on mobile, sms to upload produce details and respond via phone and sms.<br/>
                                6. We also provide web portal where farmer direct can sell their product.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={scholar_img} class="card-img-top" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title">scholarship_portal</h5>
        1. We provide here latest scholarship informations.and its forms.<br/>
        2. You also can find here all latest and upcoming job vacancy informations.<br/>
        3. We provide scholarship and job vacancy form here.<br/>
      </div>
    </div>
  </div>
 
  </div>

                         
            </React.Fragment>
        )
    }
}
