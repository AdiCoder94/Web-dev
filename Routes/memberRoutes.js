var express = require('express');
var router = express.Router();

const User = require("../Models/members.model")

// creating route endpoint for signing up new users
router.post('/signup', (req, res, next) => {

    var {
        email,
        password,
        username
    } = req.body;

    if (!email) {
        return res.send({
            message: "Email cannot be blank"
        })
    } else if (!password) {
        return res.send({
            message: "Password cannot be blank"
        })
    } else if (!username) {
        return res.send({
            message: "Username cannot be blank"
        })
    }

    email = email.toLowerCase().trim();
    username = username.trim();

    User.find({
        email: email
    }, (err, docs) => {
        if (err) {
            return res.send({
                message: "Server error"
            })
        } else if (docs.length > 0) {
            return res.send({
                message: "Sorry, user already exists"
            })
        } else if (!err) {
            User.find({
                username: username,
            }, (err, docs) => {
                if (err) {
                    return res.send({
                        message: "Server error"
                    })
                } else if (docs.length > 0) {
                    return res.send({
                        message: "Sorry, username already exists"
                    })
                } else if (!err) {
                    // creating in new user document in the database
                    const newMember = new User();
                    newMember.email = email;
                    newMember.password = newMember.generateHash(password);
                    newMember.username = username;
                    newMember.save((err, user) => {
                        if (err) {
                            return res.send({
                                success: false,
                                message: err
                            });
                        }
                        return res.send({
                            success: true,
                            message: user
                        })
                    })
                }
            })
        }
    })
}
)

// creating route endpoints for logging in members
router.post('/signin', (req, res, next) => {
    var {
        username,
        password
    } = req.body;

    if (!password) {
        return res.send({
            message: "Password cannot be blank"
        })
    } else if (!username) {
        return res.send({
            message: "Username cannot be blank"
        })
    }

    username = username.trim();

    User.find({
        username: username,
        password: password
    }, (err, user) => {
        if (err) {
            return res.send({
                message: "Server error"
            })
        } else if (user) {
            return res.send({
                message: user
            })
        } else {
            return res.send({
                message: user
            })
        }
    })
}
)

module.exports = router;