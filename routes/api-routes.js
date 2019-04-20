const db = require("../models");
const express = require("express");
const router = express.Router();

// SeaMonster Collection
router.get("/jack/seamonster", (req,res) => {
  db.SeaMonsters.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post("/jack/seamonster", (req,res) => {
  const newKraken = new db.SeaMonsters({
    name: req.body.name,
    description: req.body.description,
    imageURL: req.body.imageURL
  });
  
  newKraken.save()
    .then(kraken => res.json(kraken))
    .catch(err => res.json(err));
})

module.exports = router;