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

        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFirstNameChange(e){
        this.setState({ firstName: e.target.value })
    }

    onLastNameChange(e){
        this.setState({ lastName: e.target.value })
    }

    onDisplayNameChange(e){
        this.setState({ displayName: e.target.value })
    }

    onPasswordChange(e){
        this.setState({password: e.target.value})
    }

    onCompanyNameChange(e){
        this.setState({companyName: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onGetStartedSubmit(this.state);
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
                            <form onSubmit={this.onSubmit}>
                                <input type="text" className="name-input" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange}></input>
                                <input type="text" className="name-input" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}></input>
                                <input type="text" className="display-name" placeholder="Display Name                                         (optional)" value={this.state.displayName} onChange={this.onDisplayNameChange}></input>
                                <input type="password" className="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}></input>
                                <input type="text" className="company-name" placeholder="Company Name" value={this.state.companyName} onChange={this.onCompanyNameChange}></input>
                                <div className="signup-button-div">
                                    <button type="submit" value="Sign Up" className="get-started-signup">
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
}