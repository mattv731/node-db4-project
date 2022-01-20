const express = require('express')
const Recipes = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.get()
    .then(recipe => {
        res.json(recipe)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(next)
})

module.exports = router