const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../userControllers');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);



module.exports = router;