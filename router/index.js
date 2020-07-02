import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Mock from '../src/components/Mock';
import Hock from '../src/components/Hook-Mock'


export default class MyRoute extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route exact path="/" component={Mock} />

                    <Route path="/hock" component={Hock} />


                </Switch>
            </Router>
        )
    }
}

