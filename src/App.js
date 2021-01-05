import React, { Component } from 'react'
import Newbanner from "./components/Newbanner"
import Navbar from "./components/Navbar"
import Aboutme from "./components/Aboutme"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./App.css"
export default class App extends Component {
  render() {
    return (
      <div>
      
      <Navbar/>
      <Newbanner/>
      <Aboutme/>
      <Projects/>
      <Contact/>
      
      </div>
    )
  }
}
