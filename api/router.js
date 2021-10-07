const express = require('express');
const Recipes = require('./model.js');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try{
        res.status(200).json(await Recipes.getRecipeById(req.params.id))
    } catch (err) {
        next(err)
    }
});

module.exports = router;
