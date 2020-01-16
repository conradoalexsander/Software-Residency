var express = require("express");
var router = express.Router({ mergeParams: true });
var Evento = require('../models/evento');
var Comment = require("../models/comment");

//=======================
//    COMMENTS ROUTES
//=======================

//create new comment
router.get("/new", isLoggedIn, (req, res) => {
    //find evento by id
    Evento.findById(req.params.id, function (err, evento) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", { evento: evento });
        }
    });
});

//connect new comment to evento
router.post("/", isLoggedIn, function (req, res) {
    //lookup evento using ID
    Evento.findById(req.params.id, function (err, evento) {

        if (err) {
            console.log(err);
            //redirect evento show page
            res.redirect("/eventos");
        } else {
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                    //redirect evento show page
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    evento.comments.push(comment);
                    evento.save();
                    console.log(comment);
                    res.redirect("/eventos/" + evento._id);
                }

            });
        }
    })
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect("/login");
}

module.exports = router;
