const Newsletter = require("../models/newsletter");

module.exports.subscribe = async(req,res)=>{

    try{

        const {email}=req.body;

        const exists = await Newsletter.findOne({email});

        if(exists){

            req.flash("error","You're already subscribed with this email.");

            return res.redirect("back");

        }

        await Newsletter.create({email});

        req.flash("success","Thanks for subscribing! Check your inbox for travel inspiration.");

        res.redirect(req.get("Referrer") || "/listings");

    }

    catch(err){

        req.flash("error","Subscription failed.");

        res.redirect("back");

    }

}