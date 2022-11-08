const { Schema, model } = require("mongoose");
// const { Thoughts } = require(".");
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createAt: {
      type: Date,
      default: Date.now,
      // use getter to format timestamps
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
