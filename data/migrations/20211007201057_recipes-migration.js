
exports.up = async function(knex) {
  await knex.schema.createTable(('recipes'), table => {
      table.increments('recipe_id')
      table.string('recipe_name').unique().notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
  })
  .createTable(('ingredients'), table => {
      table.increments('ingredient_id')
      table.string('ingredient_name')
  })
  .createTable(('steps'), table => {
      table.increments('step_id')
      table.integer('step_number')
      table.string('step_instruction').notNullable()
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete("CASCADE")
  })
  .createTable(('steps_ingredients'), table => {
      table.increments('step_ingredient')
      table.decimal('quantity')
      table.integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onUpdate('CASCADE')
        .onDelete("CASCADE")
      table.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete("CASCADE")
  });
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('steps_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
