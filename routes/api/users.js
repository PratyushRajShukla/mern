const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../Users')

//get all users

router.get("/", (req,res) =>{
    res.json(users);
});

// get user by id
router.get('/:id', (req,res) =>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if (found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        req.sendStatus(400)
    }
});

//create new user
router.post('/', (req,res) =>{
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if(!newUser.name || !newUser.email){
        return req.sendStatus(400)
    }

    users.push(newUser)
    res.json(users)
})

module.exports = router;