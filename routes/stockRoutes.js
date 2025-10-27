const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');

const FurnitureStock = require('../models/furniture')//import the models
const woodStock = require('../models/wood')

// connectEnsureLogin.ensureLoggedIn(),
router.get("/registerFurniture",  (req, res) => {
    res.render("furniture", { title: "register furniture stock" });
});

router.post("/registerFurniture", async (req, res) => {
    try {
        const furniture = new FurnitureStock(req.body)
        console.log(furniture)//print it in the terminal
        await furniture.save()
        res.redirect("/registerWood")
    } catch (error) {
        console.error(error)
        res.redirect("/registerFurniture")
    }

});

router.get("/registerWood", (req, res) => {
    res.render("wood", { title: "register wood stock" });
});

router.post("/registerWood", async (req, res) => {
    try {
        const wood = new woodStock(req.body)
        console.log(wood)
        await wood.save()
        res.redirect("/registerFurniture")//you only redirect to a route path
    } catch (error) {
        console.error()
        res.redirect("/registerWood")
    }

});

module.exports = router;