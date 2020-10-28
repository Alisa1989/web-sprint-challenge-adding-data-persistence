exports.seed = async function(knex) {
    await knex("projects").insert([
        {name: "become a software developer"},
        {name: "get hired", description: "get hired as a software developer"}
    ])
}