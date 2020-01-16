var express = require("express");
var router = express.Router();
var Evento = require("../models/evento");


//===============================================================
//                      EVENTOS ROUTES
//================================================================

//INDEX - show all eventos
router.get("/", function (req, res) {
    //get all eventos from DB
    Evento.find({}, function (err, allEventos) {
        if (err) {
            console.log(err);
        } else {
            res.render("eventos/index", { eventos: allEventos}); //{name of what I am passing : the name I want pass}
        }
    })
});

//CREATE add new evento to DB
router.post("/",  function (req, res) {
    //get data from form and add to eventos array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newEvento = { name: name, image: image, description: description, author: author }
    //Create a new evento and save to DB
    Evento.create(newEvento, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            //redirect back to eventos page
            console.log(newlyCreated);
            res.redirect("/eventos");
        }
    });
});

// EDIT
router.get("/:id/edit", isLoggedIn, function(req, res){
    Evento.findById(req.params.id, function(err, foundEvento){
        if(err){
            res.redirect("/eventos");
        } else {
            res.render("eventos/edit", {evento: foundEvento});
        }
    })
   
})

// UPDATE
router.put("/:id", isLoggedIn,  function(req, res){
    //find and update the correct evento

    Evento.findByIdAndUpdate(req.params.id, req.body.evento, function(err, updatedEvento){
        if(err){
            res.redirect("/eventos");
        } else {
            res.redirect("/eventos/" + req.params.id);
        }
    })

});

router.get("/new", isLoggedIn, (req, res) => {
    res.render("eventos/new");
})


//SHOW - show more info about one evento
router.get("/:id", function (req, res) {
    //find the evento with provided ID

    Evento.findById(req.params.id).populate("comments").exec(function (err, foundEvento) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundEvento);
            //render show template with that evento
            res.render("eventos/show", { evento: foundEvento });
        }
    });

});

//DESTROY
router.delete("/:id", isLoggedIn, function(req, res){
    Evento.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/eventos");
        } else {
            res.redirect("/eventos");
        }
    })
});


// AUTHENTICATION FUNCTION
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect("/login");
}

module.exports = router;