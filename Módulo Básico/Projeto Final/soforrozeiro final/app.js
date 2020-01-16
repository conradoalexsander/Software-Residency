var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require('passport-local');
var methodOverride = require("method-override");
var User = require("./models/user");
var seedDB = require("./seeds");

var commentRoutes = require("./routes/comments"),
    eventoRoutes = require("./routes/eventos"),
    indexRoutes = require("./routes/index")


//seedDB();


mongoose.connect('mongodb://localhost:27017/so_forrozeiro', { useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

//=================================================================
//                      PASSPORT CONFIGURATION
//=================================================================

app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=================================================================

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})


app.use(indexRoutes);
app.use("/eventos/:id/comments", commentRoutes);
app.use("/eventos", eventoRoutes);

app.listen(3001, function () {
    "The YelpCamp has started"
});