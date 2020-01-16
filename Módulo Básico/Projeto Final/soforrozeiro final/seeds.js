var mongoose = require("mongoose");
var Campground = require("./models/evento");
var Comment   = require("./models/comment");
 

function seedDB(){
   //Remove all eventos
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed eventos!");
        // Comment.remove({}, function(err) {
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log("removed comments!");
        //      //add a few eventos
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, evento){
        //             if(err){
        //                 console.log(err)
        //             } else {
        //                 console.log("added a evento");
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             evento.comments.push(comment);
        //                             evento.save();
        //                             console.log("Created new comment");
        //                         }
        //                     });
        //             }
        //         });
        //     });
        // });
    }); 
    //add a few comments
}
 
module.exports = seedDB;