import React, { Component } from 'react'

export default class GetStarted extends Component{
    constructor(props){
        super(props);

        this.state = {
            existingCompany: false,
            firstName: '',
            lastName: '',
            displayName: '',
            password: '',
            companyName: '',
        }

    }

    onFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value })
    }

    onLastNameChange = (e) => {
        this.setState({ lastName: e.target.value })
    }

    onDisplayNameChange = (e) => {
        this.setState({ displayName: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onCompanyNameChange = (e) => {
        this.setState({companyName: e.target.value})
        this.setState({existingCompany: false});
    }

    onSubmit= (e) => {
        e.preventDefault();

        if( 
            this.state.firstName === '' ||
            this.state.lastName === '' ||
            this.state.password === ''
        ) { return }

        fetch('https://api-dev.vidmob.com/VidMob/api/noauth/v1/signupPrevalidation?businessName=' + this.state.companyName)
            .then(response => {
                if(response.status === 409){
                    this.setState({existingCompany: true})
                } else {
                    const newUser = {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.props.email,
                        password: this.state.password
                    }
                    if(this.state.displayName !== '') { newUser.displayName = this.state.displayName }
                    if(this.state.companyName !== '') { newUser.businessName = this.state.companyName }

                    return fetch('https://api-dev.vidmob.com/VidMob/api/noauth/v1/signup', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(newUser) 
                        }   
                    )
                }
            })
            .then(response => response.json())
            .then(responseJson => {
                let accessToken = responseJson.result.access_token
                let id = responseJson.result.id
                this.props.onGetStartedSubmit(this.state, accessToken, id);
            })
    }


    render(){
        return(
                <div className="get-started-form">
                    <div className="get-started-form-content">
                        <div className="get-started-prompt">
                            <h2>Get started on VidMob</h2>
                            <p>Your email wasn't associated with an existing company. Fill out the information below to create a new one.</p>
                        </div>
                        <div className="get-started-input">
                            {this.state.existingCompany && this.renderCompanyExistsAlert()}
                            <form onSubmit={this.onSubmit}>
                                <input type="text" className="name-input" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange}></input>
                                <input type="text" className="name-input" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}></input>
                                <input type="text" className="display-name" placeholder="Display Name                                         (optional)" value={this.state.displayName} onChange={this.onDisplayNameChange}></input>
                                <input type="password" className="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}></input>
                                <input type="text" className="company-name" placeholder="Company Name" value={this.state.companyName} onChange={this.onCompanyNameChange}></input>
                                <div className="signup-button-div">
                                    <button type="submit" value="Sign Up" className="get-started-signup" disabled={ this.state.existingCompany ? true : false}>
                                        <span className="get-started-signup-text">
                                            Sign Up
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }

    renderCompanyExistsAlert(){
        return(
            <div className="company-exists-error">
                <div className="company-exists-error-text">
                    That company looks like it already exists. Try to <a href="/">Find My Team</a> using your work email.
                </div>
            </div>
        )
    }
}