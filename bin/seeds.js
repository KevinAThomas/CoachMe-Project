const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/Movie');

const User = require('../models/User');
const Courses = require('../models/Courses');
const Coaching = require('../models/Coaching');
const Reviews = require('../models/Reviews');


//connection for the mongoose && promises 
mongoose.connect ('mongodb://localhost/coachMe')
.then(function (){
    console.log('connected to mongodb');
})
.catch (err => {
    console.log ('Error! connection to mongodb');
})


const coach = [
    {

    }
]


const celebrities = [
    {
        name: "Tom Cruise",
        occupation : "actor",
        catchPhrase : "Top gun"
    },
    {
        name: "Kardelen",
        occupation : "developpeur",
        catchPhrase : "iron"
    },
    {
        name: "Oprah",
        occupation : "comedian",
        catchPhrase : "Hello"
    },
    {
        name: "Beyonce",
        occupation : "singer",
        catchPhrase : "Halo"
    }
]
// created the New movie models
const movies = [
    {
        title: "Titanic",
        genre: "Drama",
        plot: "sad"
    }
]



//created  the celebrityDB
Celebrity.create(celebrities)
    .then(function(celebrityDB){ // [ {}, {}, {} ]
    console.log(`${celebrityDB.length} have been created 😃`);

        // movies[0].cast = [celebrityDB[0]._id] // movies = { cast = [1234] }

        movies.map( movie => movie.cast = [celebrityDB[0]._id])

        Movie.create(movies)
        .then(function(movieDB){
        console.log(`${movieDB.length} have been created 😃`);
        mongoose.connection.close()
        })
        .catch(err => {
            console.log('Error! during the creation of the movie DB');
            console.log('ERROR ===>', err);
            next(err);
        })
    })
    .catch(err => {
    console.log('Error! during the creation of the celebrities DB');
    console.log('ERROR ===>', err);
    next(err);
});