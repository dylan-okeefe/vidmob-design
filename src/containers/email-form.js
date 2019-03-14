import React, { Component } from 'react'
import FamiliarAlert from './familiar-alert'

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            submitted: false,
            familiarAlertDisplay: false,
            alreadyTaken: false
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFamiliarAlertClose = this.onFamiliarAlertClose.bind(this);

    }

    onEmailChange(e){
        this.setState({ email: e.target.value })

        if(e.target.value === 'used@email.com'){
            this.setState({alreadyTaken: true})
        } else {
            this.setState({alreadyTaken: false})
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({familiarAlertDisplay: true});

    }

    onFamiliarAlertClose(){
        this.setState({familiarAlertDisplay: false});
    }

    render() {
        let displayAlert = this.state.familiarAlertDisplay ? <FamiliarAlert onFamiliarAlertClose = {this.onFamiliarAlertClose }/> : null
        let displayOverlay = this.state.familiarAlertDisplay ? <div className="alert-overlay"></div> : null
        return (
            <div className="form">
                <div className="form-content">
                    <div className="prompt">
                        <h2>Get Started on VidMob</h2>
                        <p>Enter your work email.</p>
                    </div>
                    {/* <div className="email-taken-error">
                    </div> */}
                    <div className="input">
                        {this.state.alreadyTaken && this.renderEmailTakenAlert()}
                        <form onSubmit={this.onSubmit}>
                            <label>
                                <input type="text" placeholder="name@company.com" className="email-input" value={this.state.email} onChange={this.onEmailChange}/>
                            </label>
                            <button type="submit" value="Next" className="email-input-next">
                                <span className="next-button-text">
                                    Next
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
                {displayAlert}
                {displayOverlay}

            </div>
        )
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

}