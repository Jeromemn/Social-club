const userSchema = require('../models/user');
const User = require('../models/user');

module.exports = {
    getUsers(req, res) {
       User.find()
       .then((user) => res.json(users))
       .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('posts')
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found"})
        :res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req, res) 
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    //     updateUser(req, res) {
    //         User.update(req, res)
            
    // },
    // deleteUser(req, res) {
    //     User.deleteOne({_id:})
    // }

        

    
};

