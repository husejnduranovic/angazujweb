import React from "react";
import EmailIcon from "../assets/icons/EmailIcon";
import PasswordIcon from "../assets/icons/PasswordIcon";
import UserIcon from "../assets/icons/UserIcon";
import UsersIcon from "../assets/icons/UsersIcon";
import { Header } from "./Header";

export default class RegisterPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmitRegistrationForm = this.onSubmitRegistrationForm.bind(this);
  }

  handleInputChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmitRegistrationForm(e: any) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <>
        <Header />
        <div className="container">
            <h1 className="text-center">Registration</h1>
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={this.onSubmitRegistrationForm}
        noValidate
      >
        <label className="form-label">First Name</label>
        <div className="input-group mb-3">
          {<UserIcon />}
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="form-control"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <label className="form-label">Last Name</label>
        <div className="input-group mb-3">
          {<UsersIcon />}
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            placeholder="Last name"
            className="form-control"
            required
          />
        </div>
        <label className="form-label">Email</label>
        <div className="input-group mb-3">
          {<EmailIcon />}
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
            placeholder="johndoe@example.com"
            className="form-control"
            required
          />
        </div>

        <label className="form-label">Password</label>
        <div className="input-group mb-3">
          {<PasswordIcon />}
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            placeholder="******"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      </div>
      </>
    );
  }
}
