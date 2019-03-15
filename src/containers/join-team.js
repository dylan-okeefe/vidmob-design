import React, { Component } from 'react';

export default class JoinTeam extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            displayName: '',
            password: ''
        }

    }

    onFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value })
    }

    onLastNameChange = (e) => {
        this.setState({ lastName: e.target.value })
    }

    onDisplayNameChange= (e) => {
        this.setState({ displayName: e.target.value })
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render(){
        return(

                <div className="join-team-form">
                    <div className="join-team-form-content">
                        <div className="join-team-prompt">
                            <h2>Join the VidMob team</h2>
                            <p>Your email is associated with an existing company. Fill out the information below to finish the setup</p>
                        </div>
                        <div className="join-team-input">
                            <form>
                                <input type="text" className="name-input" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange}></input>
                                <input type="text" className="name-input" placeholder="Last Name" value={this.state.lastName} onChange={this.onLastNameChange}></input>
                                <input type="text" className="display-name" placeholder="Display Name                                         (optional)" value={this.state.displayName} onChange={this.onDisplayNameChange}></input>
                                <input type="password" className="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}></input>
                                <div className="signup-button-div">
                                    <button type="submit" value="Sign Up" className="join-team-signup">
                                        <span className="join-team-signup-text">
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