const express = require('express');
const router =   express.Router();

const FurnitureStock = require('../models/furniture')//import the models
const woodStock = require('../models/wood')

router.get("/registerFurniture", (req, res) => {
    res.render("furniture", {title:"register furniture stock"});
});

router.post("/registerFurniture",(req, res ) => {
    const furniture = new FurnitureStock(req.body)
    console.log(furniture)//print it in the terminal
    furniture.save()
    res.redirect("/registerWood")
});

router.get("/registerWood", (req, res)=> {
    res.render("wood", {title: "register wood stock"});
});

router.post("/registerWood",(req, res) => {
    const wood = new woodStock (req.body)  
    console.log(wood)
    wood.save()
    res.redirect("/registerFurniture")//you only redirect to a route path
});

module.exports = router;