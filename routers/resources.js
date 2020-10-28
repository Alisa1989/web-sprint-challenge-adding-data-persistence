const express = require("express")
const Resources = require("../models/resources")
const db = require("../data/config")

const router = express.Router()

router.get("/", async (req,res,next) => {
    try{
        const resources = await Resources.getResources()
        res.json(resources)
    } catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
	try {
        const payload = {
            name: req.body.name
        }

        if (!payload.name){
            return res.status(400).json({
                message: "Resource needs a name"
            })
        }

        const [id] = await Resources.addResource(req.body)
        const resource = await db("resources").where({ id }).first()

        res.status(201).json(resource)
	} catch(err) {
		next(err)
	}
})

module.exports = router