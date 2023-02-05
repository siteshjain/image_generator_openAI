const express=require('express');
const {generateImage}=require('../controller/controller')
const router=express.Router();

router.post('/generateimage',generateImage)

module.exports=router