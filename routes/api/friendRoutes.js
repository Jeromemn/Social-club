const router = require('express').Router();
const {
    addFriend,
    deleteFriend,
} = require('../../controllers/friendControllers');

router.route('/')