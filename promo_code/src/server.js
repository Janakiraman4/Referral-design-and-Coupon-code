const express= require('express')
const app= express()
const port = process.env.PORT || 3000;
app.use(express.json())
require('dotenv/config')
require('./db/mongoose')
const registerRoute= require('./routes/register')
const adminCouponCreationRoute= require('./routes/adminCouponCreation')
const couponListRoute = require('./routes/couponList')
const updatingCouponDetails= require('./routes/updatingCouponDetails')
const deletingCoupon= require('./routes/deletingCoupon')

app.use(registerRoute)
app.use(adminCouponCreationRoute)
app.use(couponListRoute)
app.use(updatingCouponDetails)
app.use(deletingCoupon)


app.listen(port ,()=>{
    console.log('Runnin')
})

