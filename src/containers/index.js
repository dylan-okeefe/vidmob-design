import React, { Component } from 'react'
import Header from './header';
import EmailForm from './email-form';

export default class Root extends Component {

    constructor(props){
        super(props)

        this.state = {
            emailEntered: false,
            existingCompany: false,
            modeJoin: false,
            // modeJoin: true, //just for testing
            email: '',
            firstName: '',
            lastName: '',
            displayName: '',
            password: '',
            companyName: '',
            inviteOnly: false,
            anyEmail: false,
            domains: []
        }

    }

    isExistingCompany = () => {
        this.setState({existingCompany: true});
    }

    render() {
        let emailForm = <EmailForm isExistingCompany = {this.isExistingCompany} />
        return (
            <div className="background">
                <Header />
                {/* <EmailForm isExistingCompany = {this.isExistingCompany} /> */}
                { this.state.emailEntered === false && this.renderEmailForm() }

                <button className="chat-button"></button>
            </div>
        )
    }

    renderEmailForm(){
        return(<EmailForm isExistingCompany = {this.isExistingCompany} />)
    }

}