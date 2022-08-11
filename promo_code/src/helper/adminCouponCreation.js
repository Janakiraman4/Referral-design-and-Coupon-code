const express= require('express')
const app= express()
const couponCreationService = require('../service/adminCouponService')
app.use(express.json())




exports.couponCreation = async (req,res)=>{
  try {
    const creation = await couponCreationService.couponCreation(req.body)
    res.status(201).send(creation)
  } catch (error) {
    res.status(401).send(error)
  }
}


