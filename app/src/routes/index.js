import express from "express";

import db from '../helpers/db';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express', message: 'Express'})
});

router.get('/users', async (req, res, next) => {

    const users = await db('users').select();

    res.render('users', {title: 'Users', users})
});

export default router;
