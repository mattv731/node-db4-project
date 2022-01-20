const db = require('../data/db-config')

function get() {
    return db('recipes')
}

function getRecipeById(id) {
    return db('recipes').where('recipe_id', id).first()
}

module.exports = {
    get,
    getRecipeById
}