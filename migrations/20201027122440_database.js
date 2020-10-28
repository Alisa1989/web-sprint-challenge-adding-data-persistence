
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
    table.text("description")
    table.boolean("completed").notNull().defaultTo(false)
});
   await knex.schema.createTable("resources", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
    table.text("description")
});
   await knex.schema.createTable("tasks", (table) => {
    table.increments("id")
    table.text("description").notNull()
    table.integer("project_id").references("id").inTable("projects").notNull().onDelete("CASCADE");
    table.text("notes")
    table.boolean("completed").notNull().defaultTo(false)
 });
  await knex.schema.createTable("project_resources", (table) => {
    table.integer("project_id").references("id").inTable("projects").onDelete("CASCADE");
    table.integer("resource_id").references("id").inTable("resources");
    table.primary(["project_id","resource_id"]) //2 columns as a primary key
 });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_tasks")
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
