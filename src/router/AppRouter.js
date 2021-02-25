import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AppRouter);