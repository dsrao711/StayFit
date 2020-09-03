
const router = require('express').Router() ;
let User = require('../models/user.model');

router.route('/').get(function(req, res){
    console.log('type : GET') ;
    User.find()
    .then(users => res.json(users)) 
    .catch(err => res.status(400).json('Error is ' +err));
 
});

router.route('/add').post((req , res) => {

    const username = req.body.username;
    const newUser = new User ({username});

    newUser.save()
    .then(() => {res.json('User added')}) 
    .catch(err => res.status(400).json('Error is' + err)) ;

});

module.exports = router ;