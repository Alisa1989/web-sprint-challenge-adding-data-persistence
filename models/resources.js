const db = require("../data/config")

function getResources(){
    return db("resources as r")
}

function addResource(resource){
    return db("resources").insert(resource)
}


module.exports = {
    getResources,
    addResource
}