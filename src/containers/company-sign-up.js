import React, { Component } from 'react';
import radioSelected from '../assets/ct-radio-selected.svg';
import radioDeactivated from '../assets/ct-radio-deactivated.svg';
import DomainInput from './domain-input';

export default class CompanySignup extends Component{

    constructor(props){
        super(props);

        this.state = {
            inviteOnly: false,
            anyFromDomains: true,
            domains: []
        }

    }

    onSelectDomains = (e) => {
        this.setState({anyFromDomains: true, inviteOnly: false})
    }

    onSelectInviteOnly = (e) => {
        this.setState({anyFromDomains: false, inviteOnly: true})

    }

    onDomainArrChange = (domains) => {
        this.setState({domains: domains});
    }

    onSubmit = (e) => {
        this.props.onCompanySignupSubmit(this.state);
    }

    render(){
        return(
            <div className="company-signup-form">
                <div className="company-signup-form-content">
                    <div className="company-signup-prompt">
                        <h2>Company sign up mode</h2>
                        <p>Anyone with a specified email domain can join your team. Otherwise, and owner or co-owner will have to invite all team members.</p>
                    </div>
                    <div className="company-signup-input">
                        <div className="any-email">
                            <img 
                                src={this.state.anyFromDomains ? radioSelected : radioDeactivated} 
                                className={this.state.fromAnyDomains ? "radio-selected-email" : "radio-deactivated-email"} 
                                onClick={this.onSelectDomains} 
                                alt={this.state.anyFromDomains ? "radio selected" : "radio deactivated"}
                            />
                            <div className={this.state.anyFromDomains ? "any-domain-text-selected":"any-domain-text"}>
                                Any email from my domains
                            </div>
                        </div>
                            <DomainInput emailIsSelected={this.state.anyFromDomains} onDomainArrChange={this.onDomainArrChange}/>
                        <div className="invite-only-input">
                            <img 
                                src={this.state.inviteOnly ? radioSelected : radioDeactivated} 
                                className={this.state.inviteOnly ? "radio-selected-invite" : "radio-deactivated-invite"} 
                                onClick={this.onSelectInviteOnly}
                                alt={this.state.inviteOnly ? "radio selected" : "radio deactivated"}
                            />
                            <div className={this.state.inviteOnly ? "invite-only-text-selected" : "invite-only-text"}>
                                Invite only
                            </div>
                        </div>
                        <div className="company-signup-done-div">
                            <button type="submit" value="Done" className="company-signup-done" onClick={this.onSubmit} disabled={this.state.anyFromDomains && this.state.domains.length === 0 ? true : false}>
                                <span className="company-signup-done-text">
                                    Done
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}