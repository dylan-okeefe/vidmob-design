import React, { Component } from 'react'
import clear from '../assets/ic-clear.svg'
import emailGeneric from '../assets/ic-large-email-generic.svg'

export default class InvitedAlert extends Component{

    render(){
        return (
            <div className="familiar-alert">
            <span onClick={this.props.onInvitedAlertClose}>
                <div className="close">
                    <div className="close-text">
                        Close
                    </div>
                    <img src={clear} className="close-x" alt="close x"></img>
                </div>
            </span>
                <div className="check-email-icon">
                    <img src={emailGeneric} className="email-icon" alt="email icon"></img>
                </div>
                <h2 className="familiar-header">
                    That looks familiar
                </h2>
                <div className="familiar-text">
                    That email looks like it's part of an exisiting company. Check your email for an invite to your company
                </div>
            </div>
        )
    }

}