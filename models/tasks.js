const db = require("../data/config")

function getTasks(){
    return db("tasks as t")
}

function addTask(task){
    return db("tasks").insert(task)
}

module.exports = {
    getTasks,
    addTask
}