const db = require("../data/config")

function getProjects(){
    return db("projects as p")
}

function addProject(project){
    return db("projects").insert(project)
}

module.exports = {
    getProjects,
    addProject
}