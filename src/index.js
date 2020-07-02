/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Mock from '../src/components/Mock';
import Hock from '../src/components/Hook-Mock'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <Router history={createBrowserHistory()}>
<Switch>
    <Route exact path="/" component={Mock} />

    <Route path="/hock" component={Hock} />


</Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
