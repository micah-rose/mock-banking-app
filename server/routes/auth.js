const express = require('express');
const bcrypt = require('bcryptjs');
const { pool } = require('../db/connect');

const {
    validateUser,
    isInvalidField,
    generateAuthToken
} = require('../utils/common');
const authMiddleware = require('../middleware/auth');
const Router = express.Router();

Router.post('/signup', async (req, res) => {
    try {
        //try block
    } catch (error) {
        res.status(400).send({
            signup_error: 'Error while signing up. Try again later.'
        });
    }
})