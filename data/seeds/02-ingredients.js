
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {
          ingredient_name: 'dried pasta'
        },
        {
          ingredient_name: 'ramen package'
        },
        {
          ingredient_name: 'water'
        }
      ]);
};
