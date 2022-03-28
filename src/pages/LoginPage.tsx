import React from "react";

export default class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onLoginFormSubmit(e: any) {
        e.preventDefault()
        console.log(this.state)
    }

    onChangeEmail(e: any) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e: any) {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className="form-wrapper">
                <h2 className="header-title">Login</h2>
                <form className="w-50 mx-auto" onSubmit={this.onLoginFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter email"
                            className="form-control" 
                            onChange={this.onChangeEmail} 
                            value={this.state.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password"
                            placeholder="Enter password" 
                            className="form-control"
                            onChange={this.onChangePassword} 
                            value={this.state.password} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}