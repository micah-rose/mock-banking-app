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
        const { first_name, last_name, email, password } = req.body;
        const validFieldsToUpdate = [
            'first_name',
            'last_name',
            'email',
            'password'
        ];
        const receivedFields = Object.keys(req.body);

        const isInvalidFieldProvided = isInvalidField(
            receivedFields,
            validFieldsToUpdate
        );

        if (isInvalidFieldProvided) {
            return res.status(400).send({
                signup_error: 'Invalid field.'
            });
        }

        const result = await pool.query(
            'select count(*) as count from bank_user where email=$1',
            [email]
        );

        const count = result.rows[0].count;
        if(count > 0){
            return res.status(400).send({
                signup_error: 'User with this email address already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 8);
        await pool.query(
            'insert into bank_user(first_name, last_name, email, password)',
            [first_name, last_name, email, hashedPassword]
        )
        res.status(201).send();

    } catch (error) {
        res.status(400).send({
            signup_error: 'Error while signing up. Try again later.'
        });
    }
})

Router.post('/signin', async (req, res) => {
    try {
        //try block
    } catch (error) {
        res.status(400).send({
            signin_error: 'Email/password does not match.'
        })
    }
})