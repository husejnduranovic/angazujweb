import { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component{
    render() {
        return ( 
                <nav className="navbar fixed-top bg-dark">
          <div className="container-fluid">
            <Link to="/"><h1 className="navbar-brand text-light px-5">Angažuj.me</h1></Link>
            <div className="d-flex">
              <Link to="/login">
                <button className="btn btn-primary mx-2">Log In</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-secondary mx-2">Register</button>
              </Link>
            </div>
          </div>
        </nav>
        )
    }
}