exports.seed = async function(knex) {
    await knex("resources").insert([
        {name: "laptop",  description: "powerful enough to work modern applications"},
        {name: "brain"},
        {name: "linkedin account"}
    ])
}