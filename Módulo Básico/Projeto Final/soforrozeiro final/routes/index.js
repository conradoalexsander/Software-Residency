var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root
router.get("/", function (req, res) {
    res.render("landing");
})

//=======================================
//          AUTH ROUTES
//=======================================

//show register form
router.get("/register", function(req, res){
    res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }

        passport.authenticate("local")(req,res, function(){
            res.redirect("/eventos");
        })
    })
});

//show login form
router.get("/login", function(req, res){
    res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/eventos",
        failureRedirect: "/login"
    })
);

//logout route
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/eventos")
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect("/login");
}



module.exports = router;