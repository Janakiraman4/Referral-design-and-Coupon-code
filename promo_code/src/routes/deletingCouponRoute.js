const express= require('express')
const router= new express.Router()
const app= express()

const deletingCouponHelper= require('../helper/deletingCoupon')
app.use(express.json())




router.delete('/admin/deletingCoupon/:id' , deletingCouponHelper.deletingCouponById)
router.delete('/admin/deletingAllCoupon' , deletingCouponHelper.deletingCouponAll)


module.exports=router