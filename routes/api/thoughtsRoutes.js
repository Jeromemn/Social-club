const router = require('express').Router();
const {
    getSingleThought,
    getThoughts,
    createThought,
} = require('../../controllers/userControllers')