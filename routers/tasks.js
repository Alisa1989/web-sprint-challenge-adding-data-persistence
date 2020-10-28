const express = require("express")
const Tasks = require("../models/tasks")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req,res,next) => {
    try{
        const tasks = await Tasks.getTasks()
        res.json(tasks)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
	try {
        const payload = {
            description: req.body.description,
            id: req.body.project_id
        }

        if (!payload.description || !payload.id){
            return res.status(400).json({
                message: "Task needs a description and project id"
            })
        }

        const [id] = await Tasks.addTask(req.body)
        const task = await db("tasks").where({ id }).first()

        res.status(201).json(task)
	} catch(err) {
		next(err)
	}
})

module.exports = router