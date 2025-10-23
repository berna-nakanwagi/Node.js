const express = require('express');
const router =   express.Router();

const Registration = require('../models/Registration')
router.get("/register", (req, res) => {
    res.render("user");
})
router.post("/register",(req, res ) => {
    const newUser= new Registration(req.body)
    console.log(newUser)
    newUser.save()
});

module.exports = router;