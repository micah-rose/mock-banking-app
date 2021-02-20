import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { initiateUpdateProfile } from '../actions/profile';
import { validateFields } from '../utils/common';
import { resetErrors } from '../actions/errors';

class Profile extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        errorMsg: '',
        isSubmitted: false
    };

    componentDidMount() {
        const { profile } = this.props;
        if (!_.isEqual(profile)) {
            const { first_name, last_name, email } = profile;
            this.setState({
                first_name, 
                last_name,
                email
            })
        }
    }

    componentDidUpdate(prevProps) {
        //DidUpdate
    }

    componentWillUnmount() {
        //WillUnmount
    }

    handleSubmit = event => {
        //handleSubmit
    }

    handleOnChange = event => {
        //handleOnChange
    }

    render() {
        const { errorMsg, first_name, last_name, email, isSubmitted } = this.state;
        return (
            <div className="col-md-6 offset-md-3">
                
            </div>
        )
    }
}