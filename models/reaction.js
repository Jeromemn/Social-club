const { Schema, model } = require("mongoose");
const userSchema = new Schema({ name: String }, { timestamps: true });

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        auto:true,
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    
},
{
    timestamps: true,
}
);

module.exports = reactionSchema;


