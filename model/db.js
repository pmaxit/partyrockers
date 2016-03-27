var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.database, function(err, db){
    if(err)
        console.error("Unable to connect to the mongodb server")

    else
        console.log("CONNECTED TO MONGO DB! ")
});

var User = new mongoose.Schema({
    name : String,
    mobile: String,
    img: String,
    fbid: String,
    created_at : {type: Date, default: Date.now },
    registered_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
    token: String
});


var Event = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name : String,
    desc : String,
    //TODO: List of attendees

    created_at : {type: Date, default: Date.now},
    updated_at : {type:Date, default: Date.now}
});

module.exports  = {
    mongoose : mongoose,
    users: mongoose.model("Users", User),
    events: mongoose.model("Events", Event),

}