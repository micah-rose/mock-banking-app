const express = require('express');
const authMiddleware = require('../middleware/authenticate');
const { pool } = require('../db/connect');
const { isInvalidField } = require('../utils/common');
const Router = express.Router();

Router.post('/profile', authMiddleware, async (req, res) => {
    try {
        //try block
    } catch (error) {
        res.status(400).send({
            update_error: 'Error while updating profile. Try again later.'
        })
    }
})