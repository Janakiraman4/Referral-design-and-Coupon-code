const express= require('express')
const router= new express.Router()
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


// router.get('/user/Apply_Coupon' , async(req,res)=>{
//     try {
//    const isAdmin = await userRegisterModal.findOne({email:req.body.email , password:req.body.password})
//    if(!isAdmin) return res.status(400).send({"message": "Invalid credentials"})
//    const findingCouponType= await couponModal.findOne({couponCode:req.body.couponUsed })
//     const categories= findingCouponType.applicableCategory.split(",")
//     const isAppplicable=categories.includes(req.body.purchingCategory)
//         if(!isAppplicable) throw new Error("The coupon applied is not applicable in this category")
//    if(!findingCouponType) throw new Error("The coupon used is incorrect")
//    if(findingCouponType.isValid === false) throw new Error("The coupon used is expired")
//    const purchasingAmount=req.body.payment
//    const discount=  purchasingAmount*(findingCouponType.discountOff/100)
//     const finalAmountToBePaid= req.body.payment-discount
//    res.status(201).send({
//     "total":finalAmountToBePaid ,
//     "couponUsed":req.body.couponUsed,
//     "purchasingcategory":req.body.purchingCategory    
// })
//     } 
//     catch (error) {
//         res.status(401).send(error.message)
//     }
    
// })

exports.applyingCoupon =async(req,res)=>{
    try {
        const applyingCoupon = await applyingCouponService.apply(req.body)
        res.status(201).send(applyingCoupon)
    } catch (error) {
        res.status(401).send(error)
    }
}



