const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const multer = require('multer');
const FurnitureStock = require('../models/furniture')//import the models
const woodStock = require('../models/wood')

// image upload  configs
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

// connectEnsureLogin.ensureLoggedIn(),
router.get("/registerFurniture", (req, res) => {
    res.render("furniture", { title: "register furniture stock" });
});

router.post("/registerFurniture", upload.single('furnitureImage'), async (req, res) => {
    try {
        const furniture = new FurnitureStock(req.body)
        furniture.furnitureImage = req.file.path//file path to go to the database
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

router.get("/registeredFurniture", async (req, res) => {
    try {
        const furnitureStock = await FurnitureStock.find();
        res.render("list_furniture", { furnitureStock })
    } catch (error) {
        console.error("Error getting furniture from the DB!")
        res.redirect("/")
    }
});

router.get("/registeredWood", async (req, res) => {
    try {
        const wood = await woodStock.find();
        res.render("list_wood", { wood })
    } catch (error) {
        console.error("Error getting furniture from the DB!")
        res.redirect("/")
    }

});
module.exports = router;