import React, { Component } from 'react';
import radioSelected from '../assets/ct-radio-selected.svg';
import radioDeactivated from '../assets/ct-radio-deactivated.svg';

export default class CompanySignup extends Component{

    constructor(props){
        super(props);

        this.state = {
            inviteOnly: false,
            anyFromDomains: true,
            domains: []
        }

        this.onSelectDomains = this.onSelectDomains.bind(this);
        this.onSelectInviteOnly = this.onSelectInviteOnly.bind(this);
    }

    onSelectDomains(e){
        this.setState({anyFromDomains: true, inviteOnly: false})
    }

    onSelectInviteOnly(e){
        this.setState({anyFromDomains: false, inviteOnly: true})

    }

    render(){
        let anyEmailRadio = this.state.anyFromDomains ? <img src={radioSelected} className="radio-selected-email"></img> : <img src={radioDeactivated} onClick={this.onSelectDomains} className="radio-deactivated-email"/>
        let inviteOnlyRadio = this.state.inviteOnly ? <img src={radioSelected} className="radio-selected-invite"></img> : <img src={radioDeactivated} onClick={this.onSelectInviteOnly} className="radio-deactivated-invite"/>
        let domainTextInput = this.state.anyFromDomains ? <input type="text" placeholder="Enter one or more domain..." className="domain-text-input"></input> : <input type="text" placeholder="Enter one or more domain..." className="domain-text-input" disabled></input>
        return(
            <div className="company-signup-form">
                <div className="company-signup-form-content">
                    <div className="company-signup-prompt">
                        <h2>Company sign up mode</h2>
                        <p>Anyone with a specified email domain can join your team. Otherwise, and owner or co-owner will have to invite all team members.</p>
                    </div>
                    <div className="company-signup-input">
                        <div className="any-email">
                            {anyEmailRadio}
                            <div className="any-domain-text">
                                Any email from my domains
                            </div>
                        </div>
                        <div className="domain-input">
                            {domainTextInput}
                        </div>
                        <div className="invite-only-input">
                            {inviteOnlyRadio}
                            <div className="invite-only-text">
                                Invite only
                            </div>
                        </div>
                        <div className="company-signup-done-div">
                            <button type="submit" value="Done" className="company-signup-done">
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