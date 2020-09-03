import React, { Component } from 'react' ;
import { Link } from "react-router-dom" ;
import image from "../assets/images/Untitled design (23).png"
import '../modules/mystyles.module.css'

 
export default class NavBar extends Component {
    render() {
        return (
            
           
            <nav class="navbar navbar-expand-md navbar-dark  " style={{backgroundColor: "#59405c" }}>
            
            <Link to="/" className="navbar-brand">
                <img src = {image} width="50" height="50" alt="" loading="lazy" />
                 ExcerTracker
            </Link>
              <ul class="navbar-nav mr-auto ">
                <li class="nav-item active">
                <Link to="/" className="nav-link">Excercises</Link>
                </li>
                <li class="nav-item active">
                <Link to="/user" className="nav-link">Create User</Link>
                </li>
                <li class="nav-item active">
                <Link to="/create" className="nav-link">Create Exercise</Link>
                </li>
              </ul>
              
            </nav>
            

          
          
        );

    }
}
