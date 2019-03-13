import React, { Component } from 'react'
import Header from './header';
import EmailForm from './email-form';

export default class Root extends Component {

    constructor(props){
        super(props)

        this.state = {
            existingCompany: false
        }

        this.isExistingCompany = this.isExistingCompany.bind(this);
    }

    isExistingCompany(){
        this.setState({existingCompany: true});
    }

    render() {
        return (
            <div className="background">
                <Header />
                <EmailForm isExistingCompany = {this.isExistingCompany} />

                <button className="chat-button"></button>
            </div>
        )
    }

}