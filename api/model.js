const db = require('../data/db-config')

async function getRecipeById(recipe_id) {
    const recipeObjsArray = await db('recipes as r')
    .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
    .join('steps_ingredients as si', 's.step_id', 'si.step_id')
    .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .select(
        'r.recipe_id',
        'r.recipe_name',
        'r.created_at',
        's.step_id',
        's.step_number',
        's.step_instruction',
        'si.quantity',
        'i.ingredient_id',
        'i.ingredient_name'
        )
    .where('r.recipe_id', recipe_id)
    const recipe = {
        recipe_id : recipeObjsArray[0].recipe_id,
        recipe_name: recipeObjsArray[0].recipe_name,
        created_at: recipeObjsArray[0].created_at,
        steps: recipeObjsArray.map(obj => {
            return {
                step_id: obj.step_id,
                step_number: obj.step_number,
                step_instructions: obj.step_instructions,
                ingredients: [],
            }
        })
      }
      return recipe;
}

module.exports = {
    getRecipeById,
}
