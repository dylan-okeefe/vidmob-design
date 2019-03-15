import React, { Component } from 'react'

export default class PersonalAlert extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="personal-alert">
                <h2 className="personal-header">
                    That looks lke a personal email
                </h2>
                <div className="personal-text">
                    Press continue to create a new team, or go back to try finding your team instead.
                </div>
                <div className="personal-buttons">
                    <button type="submit" value="Next" className="personal-button-back" onClick={this.props.onPersonalEmailBack}>
                                <span className="personal-button-back-text">
                                    Back
                                </span>
                    </button>
                    <button type="submit" value="Next" className="personal-button-continue" onClick={this.props.onPersonalEmailConfirm}>
                                <span className="personal-button-continue-text">
                                    Continue
                                </span>
                    </button>
                </div>
            </div>
        )
    }
}