const express= require('express')
const app= express()
const port = process.env.PORT || 3000;
app.use(express.json())
require('dotenv/config')
require('./db/mongoose')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc=  require('swagger-jsdoc')
const registerRoute= require('./routes/register')
const adminCouponCreationRoute= require('./routes/adminCouponCreation')
const couponListRoute = require('./routes/couponList')
const updatingCouponDetails= require('./routes/updatingCouponDetails')
const deletingCoupon= require('./routes/deletingCoupon')
const applyingCoupon= require('./routes/applyingCoupon')
const swaggerDocument = require('../swagger.json');

app.use(registerRoute)
app.use(adminCouponCreationRoute)
app.use(couponListRoute)
app.use(updatingCouponDetails)
app.use(deletingCoupon)
app.use(applyingCoupon)

// const options={
//     definition:{
//       openapi:"3.0.0",
//       info:{
//         title:"Swagger Setup",
//         version:"1.0.0",
//         description:"Nodejs Referral and Coupon setup"
//       },
//       servers:[
//         {
//           url:'http://localhost:3000'
//         }
//       ]
//     },
//     apis:['./routes/*.js']
// }
//   const specs = swaggerJsDoc(swaggerDocument)
  
  app.use("/api-doc" , swaggerUi.serve , swaggerUi.setup(swaggerDocument))


app.listen(port ,()=>{
    console.log('Runnin')
})

// ,
//     paths:{
//         "/Admin":{
//             get:{
//                 tags:"Admin"
//             }
//     },
//   }