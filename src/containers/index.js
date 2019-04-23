import React, { Component } from 'react'
import Header from './header';
import EmailForm from './email-form';
import GetStarted from './get-started';
import CompanySignup from './company-sign-up';
import JoinTeam from './join-team';
import { Redirect } from 'react-router';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import { access } from 'fs';

export default class Root extends Component {

    constructor(props){
        super(props)

        this.state = {
            emailEntered: false,
            existingCompany: false,
            companySignup: false,
            nonExistingSignup: false,
            email: '',
            firstName: '',
            lastName: '',
            displayName: '',
            password: '',
            companyName: '',
            inviteOnly: false,
            anyFromDomains: false,
            domains: [],
            accessToken: '',
            id: '',
        }

    }

    isExistingCompany = () => {
        this.setState({existingCompany: true});
    }

    onEmailEntered = (childState) => {
        this.setState({emailEntered: true, email: childState.email});
        if(!childState.alreadyInvited && !childState.alreadySignedup){
            this.setState({nonExistingSignup: true});
        } 
    }

    onGetStartedSubmit = (childState, accessToken, id) => {
        this.setState(
            {
                firstName: childState.firstName,
                lastName: childState.lastName,
                displayName: childState.displayName,
                password: childState.password,
                companyName: childState.companyName,
                accessToken: accessToken,
                id: id,
                companySignup: true,
                nonExistingSignup: false
            }
        )
    }

    onCompanySignupSubmit = (childState) => {
        this.setState({inviteOnly: childState.inviteOnly, anyFromDomains: childState.anyFromDomains, domains: childState.domains })
        let companySignup = {};
        if(childState.anyFromDomains === true){
            companySignup.findMyTeamEnabled = true;
            companySignup.domainWhitelist = childState.domains;
        } else {
            companySignup.findMyTeamEnabled = false;
            companySignup.domainWhitelist = [];
        }

        fetch('https://api-dev.vidmob.com/VidMob/api/v1/user/partner', {
            method: 'POST',
            headers: {
                'Authorization' : 'Bearer ' + this.state.accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(companySignup)
        })
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
    }

    render() {
        return (
                <div className="background">
                    <Header />
                        <Route exact path="/" render={props => <EmailForm {...props} onEmailEntered={this.onEmailEntered}/> }/>
                        <Route path="/getStarted" render={props => <GetStarted {...props} onGetStartedSubmit={this.onGetStartedSubmit} email={this.state.email}/> }/>
                        <Route path="/companySignup" render={props => <CompanySignup {...props}  onCompanySignupSubmit={this.onCompanySignupSubmit} accessToken={this.state.accessToken} />}/>
                        <Route path="/jointeam" component={JoinTeam} />
                        { this.state.nonExistingSignup && this.renderGetStarted() }
                        { (this.props.location.pathname === '/jointeam' || this.props.location.pathname === '/getStarted') && this.renderTerms() }
                        { this.state.companySignup && this.renderCompanySignup() }
                    <button className="chat-button"></button>
                </div>
        )
    }

    renderGetStarted(){
        if(this.props.location.pathname !== '/getStarted'){
            return(<Redirect to="/getStarted"/>)
        } else {
            return null
        }
    }

    renderCompanySignup(){
        if(this.props.location.pathname !== '/companySignup'){
            return(<Redirect to="/companySignup"/>)
        } else {
            return null
        }
    }

    renderTerms(){
        return (<div className={this.props.location.pathname === '/jointeam' ? 'terms-link' : "terms-link-non-existing"}>By selecting Sign Up, you agree to our <a href="/">Terms & Conditions</a></div>)
    }

}