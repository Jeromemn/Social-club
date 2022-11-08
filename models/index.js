const { model } = require("mongoose");
const thoughtSchema = require("./thought");
const userSchema = require("./user");

const User = model('user', userSchema)
const Thoughts = model('thought', thoughtSchema)

module.exports = { User, Thoughts };