import React, { Fragment } from "react";
import EmailIcon from "../assets/icons/EmailIcon";
import PasswordIcon from "../assets/icons/PasswordIcon";
import { Header } from "./Header";

export default class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
  }

  onLoginFormSubmit(e: any) {
    e.preventDefault();
    console.log(this.state);
  }

  handleInputChange(e: any) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
        <Fragment>
        <Header />
      <div className="container">
        <h1 className="text-center">Login</h1>
        <form className="w-50 mx-auto mt-5" onSubmit={this.onLoginFormSubmit}>
        <label className="form-label">Email</label>
          <div className="input-group mb-3">
              {<EmailIcon />}
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="form-control"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </div>
          <label className="form-label">Password</label>
          <div className="input-group mb-3">
         {<PasswordIcon />}
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      </Fragment>
    );
  }
}
