const express= require('express')
const router= new express.Router()
const app= express()
const registerModal= require('../modal/registerModal')
require('../db/mongoose')
app.use(express.json())
const registerService= require('../service/registerService')





exports.register=async(req,res)=>{
    try {
        const registered=await registerService.register(req)
        res.status(201).send(registered)
    } catch (error) {
        res.status(401).send(error)
    }
}
