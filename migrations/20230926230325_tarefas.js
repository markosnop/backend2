exports.up = function (knex) {
    return knex.schema.createTable('tab_tarefas', (t) => {
      t.increments();
      t.string('nome', 100).notNull().unique();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('tab_tarefas');
  };