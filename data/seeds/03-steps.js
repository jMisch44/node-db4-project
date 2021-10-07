
exports.seed = function(knex) {
      return knex('steps').insert([
        {
          step_number: 1,
          step_instruction: 'boil water',
          recipe_id: 1
        },
        {          
          step_number: 2,
          step_instruction: 'cook pasta, remove and serve',
          recipe_id: 1
        },
        {
          step_number: 1,
          step_instruction: 'boil water, add to styrofoam cup and serve',
          recipe_id: 2
        }
      ]);
};
