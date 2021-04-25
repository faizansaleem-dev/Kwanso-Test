const express = require("express");
router      = express.Router();
const {v4: uuidv4} = require("uuid")
const jwt = require("jsonwebtoken");
const authJwt = require("./middleware");
const config = require("./config");

let users = []
let tasks = []

router.post("/register", (req,res) => {
    const user = {
        id: uuidv4(),
        email: req.body.email,
        password: req.body.password
    }
    users.push(user)
    res.status(200).json({user: {id: user.id, email: user.email}})
})

router.post("/login", async (req,res) => {
    let token;
    users.forEach((user,index) => {
        if(user.email === req.body.email){
            if(user.password === req.body.password){
                token =  jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 10007200 
                });
                users[index].jwt = token
                res.status(200).json({JWT: token})
            }
        }
        else {
            res.status(404).json({message: "User not found"})
        }
    })
});

router.get("/user", [authJwt.verifyToken], (req,res) => {
    let token = req.headers["authorization"];
    const user = users.filter(user => user.jwt === token)
    res.status(200).json({id: user[0].id, email: user[0].email})
})

router.post("/create-task", [authJwt.verifyToken], (req,res) => {
    let token = req.headers["authorization"];
    const user = users.filter(user => user.jwt === token)
    tasks.push({id: user[0].id, task: req.body.name})
    res.status(200).json({id: user[0].id, task: req.body.name})
})

router.get("/list-tasks", [authJwt.verifyToken], async (req,res) => {
    let token = req.headers["authorization"];

    const user = users.filter(user => user.jwt === token)
    
    const result = await tasks.filter(task => task.id === user[0].id)
    
    res.status(200).json({tasks: result})
})

module.exports = router;