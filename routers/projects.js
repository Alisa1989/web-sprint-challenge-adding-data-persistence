const express = require("express")
const Projects = require("../models/projects")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req,res,next) => {
    try{
        const projects = await Projects.getProjects()
        res.json(projects)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
	try {
	//	const [id] = await db("projects").insert(req.body)
	//	const project = await db("projects").where({ id }).first()
        const payload = {
            name: req.body.name
        }

        if (!payload.name){
            return res.status(400).json({
                message: "Project needs a name"
            })
        }

        const [id] = await Projects.addProject(req.body)
        const project = await db("projects").where({ id }).first()

        res.status(201).json(project)
	} catch(err) {
		next(err)
	}
})

module.exports = router