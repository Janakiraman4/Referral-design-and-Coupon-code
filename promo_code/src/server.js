const express= require('express')
const app= express()
const port = process.env.PORT || 3000;
app.use(express.json())
require('dotenv/config')

 const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const mongoose = require("mongoose");






mongoose.connect("mongodb://127.0.0.1:27017/promoCode", {
  useNewUrlParser: true,
}).then((data) => {console.log("Connected to database...")})
.catch((err) => {
  console.error("Could not connect to database ...")
  console.log(err);
});

//swagger doc setup
app.use("/api-doc" , swaggerUi.serve , swaggerUi.setup(swaggerDocument))


app.use('/api/v1' , require('./routes/registerRoute'))
app.use('/api/v1' , require('./routes/adminCouponCreationRoutes'))
app.use('/api/v1' , require('./routes/couponListRouter'))
app.use('/api/v1' , require('./routes/updatingCoupon'))
app.use('/api/v1' , require('./routes/deletingCouponRoute'))
app.use('/api/v1' , require('./routes/applyingCoupon'))

app.listen(port ,()=>{
    console.log('Runnin')
})
