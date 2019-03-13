import React from 'react';
import ReactDOM from 'react-dom';
import Index from './containers/index';
import JoinTeam from './containers/join-team';
import './index.scss';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Index} />
            <Route exact path="/jointeam" component={JoinTeam} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
