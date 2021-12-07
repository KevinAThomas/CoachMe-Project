const { Schema, model, Mongoose } = require('mongoose');

const reviewSchema = new Schema(
    {
    name: String,
    user_id: String,
    coaching_id: String,
    text: String,
    user:[ { type : Schema.Types.ObjectId, ref: 'User'}],
   //- Array of object IDs referencing the celebrity model (basically, the array of celebrities' IDs)
    },
    {
        timestamps: true  // created time, updated time 
    }
);

module.exports = model('Movie', reviewSchema);