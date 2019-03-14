import React, { Component } from 'react'
import Header from './header';
import GetStarted from './get-started'
import CompanySignup from './company-sign-up'


export default class Root extends Component {

    constructor(props){
        super(props)

        this.state = {
            existingCompany: false,
            modeJoin: false,
            // modeJoin: true, //just for testing
            firstName: '',
            lastName: '',
            displayName: '',
            password: '',
            companyName: '',
            inviteOnly: false,
            anyEmail: false,
            domains: []
        }

        this.onGetStartedSubmit = this.onGetStartedSubmit.bind(this);

    }

    onGetStartedSubmit(childState){
        if(this.state.existingCompany){

        }
        this.setState(
            {
                firstName: childState.firstName,
                lastName: childState.lastName,
                displayName: childState.displayName,
                password: childState.password,
                companyName: childState.companyName,
                modeJoin: true
            }
        )
        console.log(childState)
    }
   
    render() {
        let getStartedView = this.state.modeJoin === false ? <GetStarted onGetStartedSubmit={this.onGetStartedSubmit}/> : null
        let modeJoinView = this.state.modeJoin ? <CompanySignup /> : null
        let terms = this.state.modeJoin === false? <div className="terms-link-non-existing">By selecting Sign Up, you agree to our <a href="/">Terms & Conditions</a></div> : null
        return (
            <div className="background">
                <Header />
                {getStartedView}
                {modeJoinView}
                {terms}

                <button className="chat-button"></button>
            </div>
        )
    }

}