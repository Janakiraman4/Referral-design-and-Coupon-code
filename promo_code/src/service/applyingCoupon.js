const express= require('express')
const app= express()
const couponModal= require('../modal/couponModal')
const userRegisterModal = require('../modal/registerModal')
app.use(express.json())


exports.apply = async(body)=>{
    try {
           const isAdmin = await userRegisterModal.findOne({email:body.email , password:body.password})
           if(!isAdmin) throw new Error( "Invalid credentials")
           const findingCouponType= await couponModal.findOne({couponCode:body.couponUsed })
            const categories= findingCouponType.applicableCategory.split(",")
            const isAppplicable=categories.includes(body.purchingCategory)
                if(!isAppplicable) throw new Error("The coupon applied is not applicable in this category")
           if(!findingCouponType) throw new Error("The coupon used is incorrect")
           if(findingCouponType.isValid === false) throw new Error("The coupon used is expired")
           const purchasingAmount=body.payment
           const discount=  purchasingAmount*(findingCouponType.discountOff/100)
            const finalAmountToBePaid= body.payment-discount
           return({
            "total":finalAmountToBePaid ,
            "couponUsed":req.body.couponUsed,
            "purchasingcategory":req.body.purchingCategory    
        })
            } 
            catch (error) {
                res.status(401).send(error.message)
            }
}