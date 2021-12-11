const express = require("express");
const router = express.Router();
const bcryptjs = require('bcryptjs');
const session = require('express-session');

const User = require('../models/User');
const Courses = require('../models/Courses');
const Coaching = require('../models/Coaching');
const Reviews = require('../models/Reviews');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET review page */
// req.curruser -> 
router.get("/create-reviews", (req, res, next)=> {
  if(req.session.currentUser){
    res.render('create-reviews');
  }else{
    res.redirect('/login');
  }
})

router.post("/create-reviews", (req, res, next)=> {
  if(!req.session.currentUser){
    res.redirect('/login')
  }
// look to the find 
// look to the findOne

  const name = req.body.coach
  Coaching.find({name})
  .then(coach => {
    const coachId = coach[0]._id // coach._id

    Reviews.create({
      email: req.body.email,
      category:req.body.user,
      location:req.body.location,
      text:req.body.text,
      coach: coachId
  
    })
    .then(createdReview => {
      res.redirect('/create-reviews');
      console.log('The review has been created:', createdReview)
    })
    .catch(err => next(err));

  })


})

/*GET user-created page*/
router.get("/user-created", (req, res, next)=> {
  res.render('user-created');
})


/*Sign up page*/
router.get('/signup', (req, res) => res.render('signup'))
router.post('/signup', (req, res, next) => {
    const salt = bcryptjs.genSaltSync(10);
    const encryptedPassword = bcryptjs.hashSync(req.body.password, salt);

    User.create({
        email: req.body.email,
        password: encryptedPassword
    })
        .then(userDB=>{
            res.redirect('/user-created');
            console.log('Newly created user is:', userDB);
           // res.redirect('/');
           // res.redirect('/user-profile');
        })
        .catch(err => next(err))
})

router.get('/user-profile', (req, res)=>{
  res.render('user-profile' ,{userInSession :req.session.currentUser});
})


/*Login page*/
router.get('/login', (req, res, next) => {
  res.render('login');
})

//.post() login route ==> to process from data
router.post('/login', (req, res, next) =>{
  const {email, password} = req.body;

  // to see the req.session
  console.log('SESSION =====> ', req.session);

  if (email === '' || password === ''){
      res.render('login', {
          errorMessage: 'Please enter both username and password to login'
      });
      return ;
  }

User.findOne({email})
.then (user=>{
  if (!user){
      res.render('login', {errorMessage: 'Username is not valid, please try with other username'});
      return ;
  }else if (bcryptjs.compareSync(password, user.password)){
      //******* SAVE THE USER IN THE SESSION ********//
      req.session.currentUser = user;
      res.render('user-profile', {userInSession: req.session.currentUser});
     // res.redirect('/user-profile');
  }
  else {
      res.render('login', {errorMessage: 'Incorrect password! try again'});
  }
})
.catch(error => next(error));
})

/*Book a session*/
/*GET Book-a-session page*/
router.get("/book-session", (req, res, next)=> {
  if(!req.session.currentUser){
    res.redirect('\login');
    return
  }
  Courses.find({})
  .populate('coach')
  .then(courses => {
    console.log("courses from GET /book-session", courses)
    res.render('book-session', {courses}); 
  })
  .catch(error => next(error));
})

router.post("/book-session", (req, res, next) => {
  console.log("FROM POST =>", req.body)
    Courses.find(req.body)
    .populate('coach')
    .then(courses => {
      console.log("courses from POST /filter-session ==>", courses)
      //res.redirect('/book-session')
      res.render('book-session', {courses})
    })
  
})

//logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


/////////////////////////////////////COACH ME/////////////////////////////////////
//step1. create the 4 coach pages

router.get("/style_coach", (req, res, next) => {
  res.render("coaches/style_coach")
});

router.get("/career_coach", (req, res, next) => {
  res.render("coaches/career_coach")
});

router.get("/sport_coach", (req, res, next) => {
  res.render("coaches/sport_coach")
});

router.get("/life_coach", (req, res, next) => {
  res.render("coaches/life_coach")
});


/*
router.get("/style_coach", (req, res, next) => {
 // Coaching.find()
    .then(function (coachingDB) {
      res.render("coaches/style_coach", { styleCoach: coachingDB });
      console.log("Connected to style_coach!😎");
    })
    .catch(function (err) {
      console.log("Error! During open the style_coach page");
    });
});
*/


module.exports = router;