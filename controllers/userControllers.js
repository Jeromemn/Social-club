const userSchema = require('../models/user');
const User = require('../models/user');
const ObjectId = require('mongodb').ObjectId;


module.exports = {
    getUsers(req, res) {
       User.find()
       .then((users) => res.json(users))
       .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        // .select('-__v')
        // .populate('thoughts')
        .then((user) => 
        !user
        ? res.status(404).json({ message: "No user found"})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body) 
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
    //     updateUser(req, res) {
    //         User.update(req, res)
            
    // },
    deleteUser(req, res) {
        User.deleteOne({_id: ObjectId(req.params.userId)},
        (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send(results.deletedCount ? 'deleted user' : 'no user found'
            );
        }
        );
    },

        

    
};

