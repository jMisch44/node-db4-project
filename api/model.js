const db = require('../data/db-config')

function getRecipeById(recipe_id) {
    const data = db('recipes as r')
    .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
    .select(
        'r.recipe_id',
        'r.recipe_name',
        'r.created_at',
        's.step_id',
        's.step_number',
        's.step_instruction'
        )
    .where('recipe_id', recipe_id)
    .orderBy('s.step_number')

    return data;
}

module.exports = {
    getRecipeById,
}
