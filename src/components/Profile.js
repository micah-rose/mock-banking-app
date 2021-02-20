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
                <Form onSubmit = {this.handleSubmit} className="profile-form">
                    {errorMsg && errorMsg.update_error ? (
                        <p className="errorMsg centered-message">{errorMsg.update_error}</p>
                    ) : (
                        isSubmitted && (
                            <p className="successMsg centered-message">
                                Profile updated successfully.
                            </p>
                        )
                    )}
                    <Form.Group controlId="email">
                        <Form.Label>Email Address:</Form.Label>
                        <span className="label-value">{email}</span>
                    </Form.Group>
                    <Form.Group controlId="first_name">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="first_name"
                            placeholder="Enter your first name"
                            value={first_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="last_name">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="last_name"
                            placeholder="Enter your last name"
                            value={last_name}
                            onChange={this.handleOnChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps)(Profile);