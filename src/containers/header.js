import React, { Component } from 'react'
import logo from '../assets/vm-logo-primary.svg'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} className="logo-img" alt="logo"/>

                </div>
                <div className="account-check" >
                    <span className="text">
                        Already have an account?

                    </span>
                </div>
                <button className="log-in">
                    Log in

                </button>
            </div>
        )
    }
}