const express = require('express');
const router =   express.Router();
const passport = require('passport');
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

router.get("/login", (req, res) => {
    res.render("login")
})
router.post("/login", passport.authenticate("local",{failureRedirect: "/login"}), (req ,res) => {
req.session.user = req.user
// console.log(req.user)
if(req.user.role ==="manager"){
    res.redirect("/registerWood")
}else if(req.user.role==="sales-Agent"){
    res.redirect("/registerFurniture")
}else{
    res.render("nonuser")
}
});

router.get("/logout", (req, res) => {
   if(req.session){
    req.session.destroy((error) =>{
        if(error){
            return res.status(500).send('Error logging out!')
        }
        res.redirect('/')
    })
   } 
});



module.exports = router;//last line