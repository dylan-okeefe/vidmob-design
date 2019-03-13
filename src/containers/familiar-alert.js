import React, { Component } from 'react'
import clear from '../assets/ic-clear.svg'
import emailGeneric from '../assets/ic-large-email-generic.svg'

export default class FamiliarAlert extends Component{

    constructor(props){
        super(props);



    }

    render(){
        return (
            <div className="familiar-alert">
            <span onClick={this.props.onFamiliarAlertClose}>
                <div className="close">
                    <div className="close-text">
                        Close
                    </div>
                    <img src={clear} className="close-x"></img>
                </div>
            </span>
                <div className="check-email-icon">
                    <img src={emailGeneric} className="email-icon"></img>
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

    // renderOverlay(){
    //     return(
    //         <div className="alert-overlay"></div>
    //     )
    // }
}