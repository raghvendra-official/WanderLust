const express=require("express");

const router=express.Router();

const wrapAsync=require("../utils/wrapAsync");

const {subscribe}=require("../controllers/newsletter");

router.post("/",wrapAsync(subscribe));

module.exports=router;