const { Thoughts, User } = require('../models');
// const { Thoughts } = require('../models/user');

module.exports = {
    getThoughts(req, res) {
        Thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.postId })
        .then((thought) =>
        !thought
        ? res.status(404).json({message: 'No thoughts found'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thoughts.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id }},
                {new: true}
            );
        })
        .then((user) =>
        !user
        ? res.status(404).json({ message: 'Thought thought of, but found no user with that id'})
        : res.json('thought of the thought!')
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};