const express= require('express')
const app= express()
app.use(express.json())
const deletingCouponService= require('../service/deletingCoupon')





exports.deletingCouponById = async (req,res)=>{
try {
   const deleting= await deletingCouponService.deletingCoupon(req)
   res.status(201).send(deleting)
} catch (error) {
    res.status(401).send(error)
}}

exports.deletingCouponAll = async(req,res)=>{
    try {
        const deleted= await deletingCouponService.deleteAllCoupon(req)
   res.status(201).send(deleted)
    } 
    catch (error) {
        res.status(401).send(error)
    }
}

