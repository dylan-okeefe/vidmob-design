import React, { Component } from 'react'

export default class DomainInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            domains: []
        }
    }

    inputKeyDown = (e) => {
        const val = e.target.value;
        if(e.key === 'Enter' && val){
            if(this.state.domains.find(domain => domain.toLowerCase() === val.toLowerCase())){
                return;
            }
            let newStateDomains = [...this.state.domains, val];

            this.setState({domains: newStateDomains});
            this.domainInput.value = null;
            this.props.onDomainArrChange(newStateDomains);
        } else if(e.key === 'Backspace' && !val) {
            this.removeDomain(this.state.domains.length - 1);
        }
    }

    removeDomain = (i) => {
        const newDomains = [...this.state.domains];
        newDomains.splice(i,1);
        this.setState({domains: newDomains});
        this.props.onDomainArrChange(newDomains);
    }


    render(){
        return(
            <div className="domain-input">
                <ul className="domain-list">
                    { this.state.domains.map((domain, i) => { 
                                let conditionalItemClass;
                                if(i === this.state.domains.length - 1 ){
                                    conditionalItemClass = 'last-line-item';
                                } else {
                                    conditionalItemClass = '';
                                }
                                return(
                                    <li className={"domain-list-item " + conditionalItemClass} key={domain}>
                                        <div className="domain-list-item-content">
                                            <div className="list-item-text">{domain}</div>
                                            <div className="remove-button" onClick={() => { this.removeDomain(i); }}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path className="svg-remove-button" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"/></svg>
                                            </div>
                                        </div>
                                    </li>
                                ) 
                            } 
                        )  
                    }
                    <input 
                        type="text" 
                        className={this.state.domains.length === 0 ? 'domain-text-input-always-show' : 'domain-text-input'}
                        placeholder={this.state.domains.length === 0 ? 'Enter one or more domain...' : ''}
                        id={this.state.domains.length > 1 && this.state.domains.length%2 === 0 ? 'input-alone-bottom-row' : 'test'}
                        onKeyDown={this.inputKeyDown} 
                        ref={ c => this.domainInput = c} 
                        disabled={this.props.emailIsSelected ? false : true}
                    />
                </ul>
            </div>
        )
    }

}