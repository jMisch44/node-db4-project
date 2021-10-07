
exports.seed = function(knex) {
      return knex('recipes').insert([
        {
          recipe_name: 'Plain Pasta'
        },
        {
          recipe_name: 'Instant Ramen'
        }
      ]);
};
