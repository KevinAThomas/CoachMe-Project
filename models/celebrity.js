const { Schema, model } = require('mongoose');

const celebritySchema = new Schema(
    {
    name: String,
    occupation: String,
    catchPhrase: String
    },
    {
        timestamps: true  // created time, updated time 
    }
);
module.exports = model('Celebrity', celebritySchema);