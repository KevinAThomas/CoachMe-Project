const mongoose = require('mongoose');

const User = require('../models/User');
const Courses = require('../models/Courses');
const Coaching = require('../models/Coaching');
const Reviews = require('../models/Reviews');


//connection for the mongoose && promises 
mongoose.connect ('mongodb://localhost/CoachMe-Project')
.then(function (){
    console.log('connected to mongodb');
})
.catch (err => {
    console.log ('Error! connection to mongodb');
})

const courses = [
    {
        category: "sport",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a60"),
        time: "12:30"
    },
    {
        category: "life",
        location: "Nantes",
        user: [],
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a63"),
        time: "14:00"
    },
    {
        category: "career",
        location: "Lille",
        user: [],
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a61"),
        time: "15:30"
    },
    {
        category: "style",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a62"),
        time: "10:30"
    },
    {
        category: "sport",
        location: "Paris",
        user: [],
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a60"),
        time:"10:00"
    }
]

// created the New coaches models
const coach = [
    {
        name: "Tom Cruise",
        category : "sport",
    },
    {
        name: "Kardelen",
        category: "career"
    },
    {
        name: "Oprah",
        category: "style"
    },
    {
        name: "Beyonce",
        category: "life"
    }
]

// // created the New review models
const review = [
    {
        user: [],
        category : "sport",
        location: "Paris",
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a60"),
        text: "It was very helpful courses that I've ever took!"
    },
    {
        user:[],
        category : "life",
        location: "Paris",
        coach: mongoose.Types.ObjectId("61b4ae20d20aa42a62cb6a63"),
        text: "I changed my daily routine thanks to these courses!!" 
    }
]



/*
Coaching.create(coach)
.then(function (coachDB){
    console.log(`${coachDB.length} have been created 😃`);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})
*/

// created the coaching
Courses.create(courses)
.then(function (courseDB){
    console.log(`${courseDB.length} courses have been created 😃`);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})


// created the reviews
Reviews.create(review)
.then(function (reviewDB){
    console.log(`${reviewDB.length} Reviews have been created📕 `);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})
