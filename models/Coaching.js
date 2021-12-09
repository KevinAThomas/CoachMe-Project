const { Schema, model } = require('mongoose');

const coachingSchema = new Schema(
    {
    name: String,
    occupation: String,
    catchPhrase: String
    },
    {
        timestamps: true  // created time, updated time 
    }
);
module.exports = model('Coaching', coachingSchema);