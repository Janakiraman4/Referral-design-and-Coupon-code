const express= require('express')
const app= express()
const port = process.env.PORT || 3000;
app.use(express.json())
require('dotenv/config')

 const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc=  require('swagger-jsdoc')
const registerRoute= require('./helper/register')
const adminCouponCreationRoute= require('./helper/adminCouponCreation')
const updatingCouponDetails= require('./helper/updatingCouponDetails')
const deletingCoupon= require('./helper/deletingCoupon')
const applyingCoupon= require('./helper/applyingCoupon')
const swaggerDocument = require('../swagger.json');
const mongoose = require("mongoose");


app.use(registerRoute)
app.use('/api/v1' , require('./routes/adminCouponCreationRoutes'))
app.use('/api/v1' , require('./routes/couponListRouter'))
app.use(updatingCouponDetails)
app.use('/api/v1' , require('./routes/deletingCouponRoute'))
app.use('/api/v1' , require('./routes/applyingCoupon'))

  
app.use("/api-doc" , swaggerUi.serve , swaggerUi.setup(swaggerDocument))


mongoose.connect("mongodb://127.0.0.1:27017/promoCode", {
  useNewUrlParser: true,
}).then((data) => {console.log("Connected to database...")})
.catch((err) => {
  console.error("Could not connect to database ...")
  console.log(err);
});



app.listen(port ,()=>{
    console.log('Runnin')
})



// mongoose
//   .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
//   .then((data) => {console.log("Connected to database...")})
//   .catch((err) => {
//     console.error("Could not connect to database ...")
//     console.log(err);
//   });