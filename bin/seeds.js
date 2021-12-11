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
        user: [mongoose.Types.ObjectId("61b257e0c78ecf27781d6acf")],
        coach: mongoose.Types.ObjectId("61b47fd77b1ec24ee6afa9f3")
    },
    {
        category: "life",
        location: "Nantes",
        user: [mongoose.Types.ObjectId("61b2585cb1c57d27c12822ab")],
        coach: mongoose.Types.ObjectId("61b4806e7b1ec24ee6afa9fe")
    },
    {
        category: "career",
        location: "Lille",
        user: [mongoose.Types.ObjectId("61b25d5fb850ca2b0a23a6b4")],
        coach: mongoose.Types.ObjectId("61b480397b1ec24ee6afa9fc")
    },
    {
        category: "style",
        location: "Paris",
        user: [mongoose.Types.ObjectId("61b25c78c38d082a0ad0d46f")],
        coach: mongoose.Types.ObjectId("61b4804e7b1ec24ee6afa9fd")
    },
    {
        category: "sport",
        location: "Paris",
        user: [mongoose.Types.ObjectId("61b25c78c38d082a0ad0d46f")],
        coach: mongoose.Types.ObjectId("61b47fd77b1ec24ee6afa9f3")
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

// created the coaching
Courses.create(courses)
.then(function (courseDB){
    console.log(`${courseDB.length} have been created 😃`);
})
.catch(err => {
    console.log('Error! during the creation of the Coach DB');
    console.log('ERROR ===>', err);
    next(err);
})