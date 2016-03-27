module.exports.requireLogin = function(req, res, next){

    console.log("CHECKING session user")
    if(!req.session.user){
        res.redirect('/login');
    }
    else{
        next();
    }
};