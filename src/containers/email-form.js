import React, { Component } from 'react'
import InvitedAlert from './invited-alert'
import PersonalAlert from './personal-alert'

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            submitted: false,
            alreadyInvited: false,
            alreadySignedUp: false,
            personalEmail: false,
            continuePersonal: false
        }

    }

    onPersonalEmailConfirm = () => {
        this.setState({personalEmail: false})
        this.setState({continuePersonal: true})
        this.props.onEmailEntered(this.state)
    }

    onPersonalEmailBack = () => {
        this.setState({personalEmail: false})
    }

    onEmailChange = (e) => {
        console.log(this.props)
        this.setState({ email: e.target.value })
        this.setState({alreadySignedUp: false})

    }

    onInvitedAlertClose = () => {
        this.setState({alreadyInvited: false});
    }


    onButtonPress = (e) => {
        e.preventDefault();
        switch(this.state.email){
            case 'invited@email.com':
                this.setState({alreadyInvited: true})
                break;
            case 'user@email.com':
                this.setState({alreadySignedUp: true})
                break;
            case 'user@personal.com':
                if(this.state.continuePersonal){
                    this.props.onEmailEntered(this.state)
                } else {
                    this.setState({personalEmail: true})
                };
                break;
            default:
                this.props.onEmailEntered(this.state)   
        }

    }

    render() {
        return (
            <div className="form">
                <div className="form-content">
                    <div className="prompt">
                        <h2>Get Started on VidMob</h2>
                        <p>Enter your work email.</p>
                    </div>
                    <div className="input">
                        {this.state.alreadySignedUp && this.renderEmailTakenAlert()}
                        <form onSubmit={this.onSubmit}>
                            <label>
                                <input type="text" placeholder="name@company.com" className="email-input" value={this.state.email} onChange={this.onEmailChange}/>
                            </label>
                            <button type="submit" value="Next" className="email-input-next" onClick={this.onButtonPress}>
                                <span className="next-button-text">
                                    Next
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                { this.state.alreadyInvited && this.renderInvited() }
                { this.state.alreadyInvited || this.state.personalEmail ? <div className="alert-overlay"></div> : null}
                { this.state.personalEmail && this.renderPersonal() }

            </div>
        )
    }

    renderInvited(){
        return <InvitedAlert onInvitedAlertClose = {this.onInvitedAlertClose }/>;
    }

    renderEmailTakenAlert(){
        return(
            <div className="email-taken-error">
                <div className="email-taken-error-text">
                    That email looks like it's already taken. Do you want to <a href="/">login</a> or <a href="/">reset your password</a>?
                </div>
            </div>
        )
    }

    renderPersonal(){
        return <PersonalAlert onPersonalEmailConfirm= { this.onPersonalEmailConfirm } onPersonalEmailBack={ this.onPersonalEmailBack }/>
    }

}