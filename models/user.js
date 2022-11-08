const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
    // match valid email -- mongoose matching validation
  },
    thoughts: [
    {
    type: Schema.Types.ObjectId,
    ref: 'thought'
    },
],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'user',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id:false  // not certain
}
);

// const User = model('user', userSchema);

module.exports = userSchema;
