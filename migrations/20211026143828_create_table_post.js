exports.up = function (knex) {
  return knex.schema.createTable("post", function (table) {
    table.increments();
    table.string("title");
    table.text("content");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("post");
};
