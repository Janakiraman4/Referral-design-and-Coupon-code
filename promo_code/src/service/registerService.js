const express= require('express')
const app= express()
const registerModal= require('../modal/registerModal')
app.use(express.json())




exports.register = async(req)=>{
    try {
        const user = new registerModal(req.body)
    if(!user) throw new Error("Given data is invalid")
    
    if(req.query.referrer){
        let findingOne= await registerModal.findOne({referralLink:req.query.referrer})
        if(!findingOne) {
            await user.save()
            throw new Error("Referral count added")
        }
        console.log('hjavvfushv')
        user.wallet=user.wallet+20
        await user.save()         


        const detailsObj={referredPersonId:user.id ,referredPersonUsername:user.username }
        let updatingOne= await registerModal.updateOne({referralLink:req.query.referrer},
        {           
            referredCount:findingOne.referredCount+1,
            wallet:findingOne.wallet+10,
            $push:{peopleReferredByMe:detailsObj}
        })
        await user.save()
       return (findingOne)
    }

    await user.save()
    return(user)    
    } catch (error) {
        return (error.message)
    }
}