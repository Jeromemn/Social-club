// const { model } = require("mongoose");
// const thoughtSchema = require("./thought");
// const userSchema = require("./user");

// const User = model('user', userSchema)
// const Thoughts = model('thoughts', thoughtSchema)

const User = require('./User');
const Thoughts = require('./Thought');

module.exports = { User, Thoughts };