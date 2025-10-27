const express = require('express');
const router =   express.Router();

const Registration = require('../models/Registration')
router.get("/register", (req, res) => {
    res.render("user");
})
router.post("/register", async(req, res ) => {
    try {
         const newUser= new Registration(req.body)
    console.log(newUser)
    let user = await Registration.findOne({
        email: req.body.email
    })
    if(user){
        return res.status(400).send('Not registered, user already exists')
    }else{
         await Registration.register(newUser,req.body.password,(error)=>{
        if(error){
            throw error;
        }
    })
    res.redirect("/")  
    }
  } catch (error) {
       console.error(error.message)
       res.status(400).send('something went wrong!') 
    }
  
});

module.exports = router;//last line