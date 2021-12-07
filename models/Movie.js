const { Schema, model, Mongoose } = require('mongoose');

const movieSchema = new Schema(
    {
    title: String,
    genre: String,
    plot: String,
    cast:[ { type : Schema.Types.ObjectId, ref: 'Celebrity'}],
   //- Array of object IDs referencing the celebrity model (basically, the array of celebrities' IDs)
    },
    {
        timestamps: true  // created time, updated time 
    }
);

module.exports = model('Movie', movieSchema);