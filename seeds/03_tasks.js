exports.seed = async function(knex) {
    await knex("tasks").insert([
        {description: "complete lambda school", project_id: 1},
        {description: "apply for jobs", project_id: 2},
        {description: "connect with people on linkedin", project_id: 2}
    ])
}