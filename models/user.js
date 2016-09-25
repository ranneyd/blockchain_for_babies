var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    birthdate: String,
    address: String,
    phonenumber: String,
    public: String,
    private: String
});

User.plugin(passportLocalMongoose, {
    usernameLowerCase: true,
});

module.exports = mongoose.model('User', User);
