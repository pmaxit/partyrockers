/**
 * Created by puneet on 3/26/16.
 */
module.exports.saveUser = function(db, name, token, callback){
    db.collection('User').save({
        name: name,
    }, callback)
}

module.exports.findUserByFbid = function(db, fbid, callback){
    db.collection('Users').findOne({
        fbid: fbid
    }, function(err, user){
        if(err || !user) callback(null);
        else callback(user);
    })
}