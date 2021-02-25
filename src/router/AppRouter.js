import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';

export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
            <div className="container">
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AppRouter);