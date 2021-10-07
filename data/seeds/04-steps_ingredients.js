
exports.seed = function(knex) {
      return knex('steps_ingredients').insert([
        {quantity: 1, step_id: 1, ingredient_id: 3},
        {quantity: 1, step_id: 2, ingredient_id: 1},
        {quantity: 2, step_id: 3, ingredient_id: 2}
      ]);
};
