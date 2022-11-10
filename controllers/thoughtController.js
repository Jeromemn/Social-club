const { application } = require('express');
const { Thoughts, User } = require('../models');
// const { Thoughts } = require('../models/user');

module.exports = {
    getThoughts(req, res) {
        Thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
        .then((thoughts) =>
        !thoughts
        ? res.status(404).json({message: 'No thoughts found'})
        : res.json(thoughts)
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thoughts.create(req.body)
        .then((thoughts) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thoughts._id }},
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
    updateThought(req, res) {
        Thoughts.findByIdAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body },
            { runValidators: true, new: true}
        )
        .then((thoughts) =>
        !thoughts? res.status(404).json({ message: 'no thought found with id' })
        : res.json(thoughts)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    deleteThought(req, res) {
        Thoughts.findOneAndRemove({ _id: req.params.thoughtId })
          .then((thoughts) =>
            !thoughts
              ? res.status(404).json({ message: 'No thoughts with this id!' })
              : User.findOneAndUpdate(
                  { thoughts: req.params.thoughtId },
                  { $pull: { thoughts: req.params.thoughtId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'thoughts created but no user with this id!',
                })
              : res.json({ message: 'thoughts successfully deleted!' })
          )
          .catch((err) => res.status(500).json(err));
        },

        addReaction(req, res) {
            Thoughts.findByIdAndUpdate(
                { _id: req.params.thoughtId},
                { $addToSet: { reactions: req.body}},
                { runValidators: true, new: true },
            )
            .then((thought) =>
            !thought? res.status(404).json({ message: 'no thought with this id'})
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
        },

        deleteReaction(req, res) {
            Thoughts.findByIdAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionsId }}},
                {runValidators: true, new: true },
            )
            .then((thought) => 
                !thought
                ? res.status(404).json({ message: 'no thought with this id'})
                : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
        }

};